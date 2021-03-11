import React, { useState } from "react";
import { connect, styled } from "frontity";

const Callback = ({ state }) => {
  // Get the theme color.
  const { themeColor } = state.theme.colors;

  const [number, setNumber] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const callbackRequest = (e) => {
    e.preventDefault();

    const E164covertor = (number) => {
      return (number.charAt(0) !== "+" ? "+" + number : number).replace(
        /\s/g,
        ""
      );
    };

    const data = JSON.stringify({
      id: 44586,
      tel: E164covertor(number),
    });

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        setResponseMessage(JSON.parse(this.responseText));
      }
    };

    xhr.open("POST", "https://app.callpage.io/api/v1/external/widgets/call");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE2MTU0NTYyMzYsImp0aSI6IkVsWVhUcnhLOEtVdjZiclhveW9WbFotNmdYOWlleTdudnZEUHR0VUR1RnMiLCJkYXRhIjoie1wid2lkZ2V0X2lkc1wiOls0NDU4Nl0sXCJudW1iZXJfaWRzXCI6W10sXCJzY29wZXNcIjpbXCJ3aWRnZXRzLmNhbGxcIixcIndpZGdldHMudmlld1wiXX0ifQ.dbeiF4hyJZydC_LEv9fwpxk36EL04xXi6WP_NQRuotrfoWyOhcbFH2dmqM8n0yW8"
    );
    xhr.send(data);

    if (responseMessage.errorCode == 0) {
      var timeleft = 28;
      var downloadTimer = setInterval(function () {
        if (timeleft <= 2) {
          clearInterval(downloadTimer);
          document.getElementById("countdown").innerHTML =
            "Your phone should be ringing by now, if not I'll call you again after a while.";
        } else {
          document.getElementById("countdown").innerHTML =
            "Please wait " + timeleft + " seconds, I'm dialing your number. 🤙🏻";
        }
        timeleft -= 1;
      }, 1000);
    }
  };

  return (
    <CallbackForm color={themeColor}>
      <h1>Let me call you back within 28 seconds.</h1>

      <form onSubmit={callbackRequest}>
        <CallbacktFormHeader>
          Let the magic happen just by leaving your your number with the country
          code.
        </CallbacktFormHeader>
        <InputNumber>
          <div className="input">
            <input
              type="number"
              name="number"
              placeholder=" "
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <a>Number</a>
          </div>
        </InputNumber>

        {/* If the form was submitted successfully we can show a confirmation */}
        {responseMessage.errorCode == 0 && (
          <SuccessMessage color={themeColor}>
            <span id="countdown"></span>
          </SuccessMessage>
        )}

        {/* Show the REST API error messages.
            E.g. "Sorry, your request was not fulfilled." */}
        {responseMessage.hasError && (
          <ErrorMessage> {responseMessage.message} </ErrorMessage>
        )}

        <SubmitButton>
          <input type="submit" value="CALL ME" />
        </SubmitButton>
      </form>
    </CallbackForm>
  );
};

export default connect(Callback);

const CallbackForm = styled.div`
    max-width: 90%;
    margin: 10px auto;
    form {
    padding: 30px;
    background: hsl(0,0%,4%) !important;
    box-shadow: 1px 1px 0.5em black inset;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "title number"
        "message button";
        @media screen and (max-width: 768px) {
            grid-template-areas:
                "title title"
                "number number"
                "message message"
                ". button";
        }
    }

    

    /* Delay autofill styling */
    input:-webkit-autofill, 
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
        -webkit-transition-delay: 99999s;
        background-color: transparent;
    }

    .input {
        position: relative;
        margin: 17px 0;
        transition: 0.2s ease;
    }
      
    input[type=submit], .input input, .input textarea {
        background: rgba(40, 41, 54, 1);
        border-radius: .25em;
        border: .1em solid hsl(0, 0%, 33%);
        box-shadow: 1px 1px 0.5em black inset;
        background: hsl(0, 0%, 8%) !important;
        font: inherit;
        color: inherit;
        outline: none;
        transition: inherit;
        box-sizing:border-box;
        width: 100%;
    }

    .input input, .input textarea {
      padding: 15px;
      font-size: 26px;
    }

    input[type=submit] {
      padding: 10px;
      font-size: 24px;
    }

    .input input:focus,.input textarea:focus {
        border: .1em solid ${(props) => props.color};
        box-shadow: 0 0 0 1px ${(props) =>
          props.color}, 0 0 0 6px rgba(0, 0, 0, 0.2),
            0 0 0 1px ${(props) => props.color};
    }
    
    .input a {
        display: grid;
        align-content: center;
        position: absolute;
        height: calc(100% - 1px);
        padding: 0 4px;
        left: 7px;
        top: 0;
        color: #aaa;
        pointer-events: none;
        user-select: none;
        transition: inherit;
        text-decoration: none;
        font-size: 26px;
    }

    .input input:focus + a,
    .input input:not(:placeholder-shown) + a,
    .input textarea:focus + a,
    .input textarea:not(:placeholder-shown) + a {
        top: -25px;
        left: 0px;
        height: 15px;
        font-size: 26px;
        }

    .input input:focus + a,
    .input textarea:focus + a {
        color: ${(props) => props.color};
    }
      
      input[type=submit]:hover {
        border: .1em solid ${(props) => props.color};
        box-shadow: 0 0 0 1px ${(props) =>
          props.color}, 0 0 0 6px rgba(0, 0, 0, 0.2),
            0 0 0 1px ${(props) => props.color};
        color: ${(props) => props.color};
    }
}
`;

const CallbacktFormHeader = styled.h2`
  grid-area: title / title / title / title;
  width: 100%;
  box-sizing: border-box;
  display: block;
  margin: 10px auto;
  padding: 10px 0;
`;

const InputNumber = styled.div`
  grid-area: number / number / number / number;
  width: 100%;
`;

const SubmitButton = styled.div`
  justify-self: end;
  width: fit-content;
  grid-area: button / button / button / button;
`;

const SuccessMessage = styled.div`
  grid-area: message / message / message / message;
  color: #000;
  background-color: ${(props) => props.color};
  margin: 5px 0;
  padding: 5px;
  display: inline-block;
  border-radius: 3px;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  grid-area: message / message / message / message;
  color: #000;
  background-color: #f00;
  margin: 5px 0;
  padding: 5px;
  display: inline-block;
  border-radius: 3px;
  font-weight: bold;
`;
