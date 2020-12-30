import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import ColorTheme from "./theme";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer color={state.theme.colors.themeColor}>
    <NavItems>
      {state.theme.menu.map(([name, link]) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;
        return (
          <NavItem key={name}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </NavItem>
        );
      })}
    </NavItems>
            <ColorItems>
                <ColorTheme/>
            </ColorItems>
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
/* define a fixed width for the entire menu */
  display: grid;
  grid-template-rows: 1fr 32px;
  grid-template-areas:
  "navitems"
  "coloritems";
  padding: 12px 24px;
  width: 200px;
  height: calc(100vh - 90px); /* header + footer */
  @media screen and (min-width: 560px) and (max-width: 1024px) {
    height: calc(100vh - 110px); /* header + footer */
  }
  overflow-y: auto;
  background: hsl(0,0%,8%) !important;
  box-shadow: 1px 1px 0.5em black inset;
  @media screen and (max-width: 560px) {
    display: none;
  }

a {
/*  background-color: #eee; 
  color: black; */
  display: block;
  padding: 12px;
  text-decoration: none;
  font-weight: bold;
}

a::before {
  color: #fff;
  content: "cd ";
  text-indent: 0px;
  letter-spacing: -20px;
  opacity: 0;
  transition: letter-spacing 0.3s ease-out, opacity 0.3s ease-out;
  text-decoration: none;
}
a:hover {
  background: hsl(0,0%,4%) !important;
}
a:hover::before {
  text-indent: 0px;
  letter-spacing: normal;
  opacity: 1;
  text-decoration: none;
}

/* Use for semantic approach to style the current link */
[aria-current="page"] {
  background: hsl(0,0%,6%) !important;
  :after {
    color: #fff;
    content: "/";
    text-decoration: none;
  }
  :hover::before {
    opacity: 0;
    letter-spacing: -20px;
    text-decoration: none;
  }
  :hover::after {
    color: ${(props) => props.color};
  }
  :hover {
    background: hsl(0,0%,6%) !important;
  }

}

`;

const NavItem = styled.div`
`;

const NavItems = styled.div`
  grid-area: navitems / navitems / navitems / navitems;
`;

const ColorItems = styled.div`
  grid-area: coloritems / coloritems / coloritems / coloritems;
`;