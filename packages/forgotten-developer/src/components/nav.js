import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
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
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
/* define a fixed width for the entire menu */
  padding: 24px;
  width: 75%;
  height: 100vh;
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
  background: hsl(0,0%,10%) !important;
}
a:hover::before {
  text-indent: 0px;
  letter-spacing: normal;
  opacity: 1;
  text-decoration: none;
}



a.active {
  background-color: #4CAF50;
  color: white;
}

`;

const NavItem = styled.div`

`;
