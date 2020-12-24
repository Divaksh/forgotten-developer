import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background: hsl(0,0%,8%) !important;
  box-shadow: 4px 4px 2em black inset;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 60px;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 75px;
  padding-right: 24px;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background: hsl(0,0%,4%) !important;
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: #0f0;
    font-weight: bold;
    background: hsl(0,0%,6%) !important;
  }
`;

export default connect(MenuModal);
