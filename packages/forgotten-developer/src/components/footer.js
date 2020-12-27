import React from "react";
import { connect, styled } from "frontity";
import { FaCode, FaCircle } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { GoTerminal } from "react-icons/go";

const Footer = ({state, actions}) => {
  // Get the theme color.
  const { themeColor } = state.theme.colors;

    return (
        <Container>
            <FooterText>
              <FaCode color={themeColor} style={{ marginBottom: "-2px" }} /> with <GiHeartOrgan color="red" style={{ marginBottom: "-2px" , animation: "pulsate 1.4s linear infinite" }} /> and <GiBrain color="pink" style={{ marginBottom: "-2px" }} /> by Divaksh
            </FooterText>
            <ColorChoice>
            <GoTerminal color="#0f0" style={{ marginBottom: "-2px", marginRight: "5px" }} onClick={actions.theme.setThemeColorGreen} />
            <GoTerminal color="red" style={{ marginBottom: "-2px", marginRight: "5px" }} onClick={actions.theme.setThemeColorRed} />
            <GoTerminal color="#1DBAFE" style={{ marginBottom: "-2px", marginRight: "5px" }} onClick={actions.theme.setThemeColorBlue} />
            <GoTerminal color="#dbf962" style={{ marginBottom: "-2px", marginRight: "5px" }} onClick={actions.theme.setThemeColorYellow} />
            <GoTerminal color="#0ff" style={{ marginBottom: "-2px", marginRight: "5px" }} onClick={actions.theme.setThemeColorTeal} />
            <GoTerminal color="white" style={{ marginBottom: "-2px", marginRight: "5px" }} onClick={actions.theme.setThemeColorWhite} />
            </ColorChoice>

        </Container>
      );
    };
    
export default connect(Footer);

const Container = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "colorchoice textarea";
        @media screen and (max-width: 768px) {
            grid-template-areas:
                "colorchoice colorchoice"
                "textarea textarea";
        }
    }
`;

const FooterText = styled.div`
    grid-area: textarea / textarea / textarea / textarea;
    width: 100%;
    font-size: 16px;
    margin: auto;
    padding: 2px 12px 2px 2px;
    text-align: right;
`;

const ColorChoice = styled.div`
    grid-area: colorchoice / colorchoice / colorchoice / colorchoice;
    width: 100%;
    font-size: 20px;
    margin: auto;
    padding: 2px 0 0 24px;
    text-align: left;
`;