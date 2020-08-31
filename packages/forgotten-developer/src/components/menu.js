import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Menu = ({ state, actions }) => {
  return (
    <>
      {state.theme.isMenuOpen ? (
        <>
          <MenuButton onClick={actions.theme.closeMenu}>
            <div className="ham-menu open">
              <div className="line-menu half start"></div>
              <div className="line-menu"></div>
              <div className="line-menu half end"></div>
            </div>
          </MenuButton>
          <NavBar>
            <Link link="/">Home</Link>
          </NavBar>
        </>
      ) : (
        <MenuButton onClick={actions.theme.openMenu}>
          <div className="ham-menu">
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
        </MenuButton>
      )}
    </>
  );
};
// Connect the Menu component to get access to the `state` in it's `props`
export default connect(Menu);

const MenuButton = styled.div`
  color: white;
`;

const NavBar = styled.nav`
  margin: 16px;
`;
