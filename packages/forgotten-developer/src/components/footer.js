import React from "react";
import { connect, styled } from "frontity";
import { FaCode } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";

const Footer = () => {

    return (
        <Container>
            <FooterText>
              <FaCode color="#0f0" style={{ marginBottom: "-2px" }} /> with <GiHeartOrgan color="red" style={{ marginBottom: "-2px" , animation: "pulsate 1.4s linear infinite" }} /> and <GiBrain color="pink" style={{ marginBottom: "-2px" }} /> by Divaksh
            </FooterText>
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