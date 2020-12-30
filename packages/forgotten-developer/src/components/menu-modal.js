import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import ColorTheme from "./theme";

const MenuModal = ({ state, actions }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  // Get the theme color.
  const { themeColor } = state.theme.colors;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
      <ColorTheme />
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              color={themeColor}
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
  box-shadow: 2px 2px 1em black inset;
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 60px;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100vw;
`;

const MenuLink = styled(Link)`
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  margin: 0 10%;
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
    color: ${(props) => props.color};
    font-weight: bold;
    background: hsl(0,0%,6%) !important;
  }
`;

export default connect(MenuModal);
