import React from "react";
import { connect, styled } from "frontity";
import { FaCode, FaCircle } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import ColorTheme from "./theme";


const Footer = ({state, actions}) => {
  // Get the theme color.
  const { themeColor } = state.theme.colors;

    return (
        <Container>
            <FooterText>
              <FaCode color={themeColor} style={{ marginBottom: "-2px" }} /> with <GiHeartOrgan color="red" style={{ marginBottom: "-2px" , animation: "pulsate 1.4s linear infinite" }} /> and <GiBrain color={themeColor=="red" ? "red" : "pink" } style={{ marginBottom: "-2px" }} /> by Divaksh
            </FooterText>
        </Container>
      );
    };
    
export default connect(Footer);

const Container = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "colorchoice textarea";
        @media screen and (max-width: 768px) {
            grid-template-areas:
                "colorchoice colorchoice"
                "textarea textarea";
            align-items: center;
            justify-content: center;
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
    @media screen and (max-width: 768px) {
        padding: 0;
        text-align: center;
    }
`;