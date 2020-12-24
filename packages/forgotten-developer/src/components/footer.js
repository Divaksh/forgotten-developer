import React from "react";
import { connect, styled } from "frontity";
import { FaCode } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";

const Footer = () => {

    return (
        <FooterText>
           <FaCode color="#0f0" style={{ marginBottom: "-2px" }} /> with <GiHeartOrgan color="red" style={{ marginBottom: "-2px" , animation: "pulsate 1.4s linear infinite" }} /> and <GiBrain color="pink" style={{ marginBottom: "-2px" }} /> by Divaksh
        </FooterText>
      );
    };
    
export default connect(Footer);

const FooterText = styled.div`
    font-size: 14px;
    margin: auto;
    padding: 1px 10px 1px 2px;
    text-align: right;
`;