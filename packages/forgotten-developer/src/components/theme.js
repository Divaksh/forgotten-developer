import React from "react";
import { connect, styled } from "frontity";
import { GoTerminal } from "react-icons/go";


const ColorTheme = ({actions}) => (
    <ThemeMenu>
        <GoTerminal color="#0f0" style={{ marginBottom: "-2px", marginRight: "10px", cursor: "pointer" }} onClick={actions.theme.setThemeColorGreen} />
        <GoTerminal color="red" style={{ marginBottom: "-2px", marginRight: "10px", cursor: "pointer" }} onClick={actions.theme.setThemeColorRed} />
        <GoTerminal color="#1DBAFE" style={{ marginBottom: "-2px", marginRight: "10px", cursor: "pointer" }} onClick={actions.theme.setThemeColorBlue} />
        <GoTerminal color="#dbf962" style={{ marginBottom: "-2px", marginRight: "10px", cursor: "pointer" }} onClick={actions.theme.setThemeColorYellow} />
        <GoTerminal color="#0ff" style={{ marginBottom: "-2px", marginRight: "10px", cursor: "pointer" }} onClick={actions.theme.setThemeColorTeal} />
    </ThemeMenu>
  );
  
  export default connect(ColorTheme);
  
  const ThemeMenu = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 12px 0 12px 0px;
`;