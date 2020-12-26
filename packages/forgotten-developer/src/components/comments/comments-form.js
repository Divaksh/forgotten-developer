import React from "react";
import { connect, styled } from "frontity";
import Loading from "../loading";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
     <CommentForm>
        <CommentFormHeader>
             Add Comment>
            {/* If the form is submitting, we can show some kind of a loading state */}
            {form?.isSubmitting && <Loading />}
        </CommentFormHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.comments.submit(postId);
        }}
      >
        <InputName>
        <div className="input">
          <input
            type="text"
            name="author_name"
            placeholder=" "
            spellcheck="false"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorName: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorName || ""}
          />
          {form?.errors?.authorName}
          <a>Name</a>
        </div>
        </InputName>

        <InputEmail>
        <div className="input">
          <input
            type="text"
            name="author_email"
            placeholder=" "
            spellcheck="false"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorEmail: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorEmail || ""}
          />
          {form?.errors?.authorEmail}
          <a>Email</a>
        </div>
        </InputEmail>

        <InputContent>
        <div className="input">
          <textarea
            name="content"
            placeholder=" "
            rows="5"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                content: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.content || ""}
          />
          {/* Show the errors for the individual fields.
            E.g. content of a comment cannot be empty and the email must be valid */}
          {form?.errors?.content}
          <a>Comment</a>
        </div>
        </InputContent>


        {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
        {form?.errorMessage && <ErrorMessage>ERROR: {form?.errorMessage}</ErrorMessage>}

        {/* If the form was submitted successfully we can show a confirmation */}
        
          {form?.isSubmitted && <SuccessMessage> "The comment was submitted successfully!" </SuccessMessage>}
        
        <SubmitButton>
          <input type="submit" value="SUBMIT"/>
        </SubmitButton>
      </form>
    </CommentForm>
  );
};

export default connect(CommentsForm);

const CommentForm = styled.div`
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
        "name email"
        "textarea textarea"
        "message button";
        @media screen and (max-width: 768px) {
            grid-template-areas:
                "name name"
                "email email"
                "textarea textarea"
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
        padding: 10px;
        outline: none;
        transition: inherit;
        box-sizing:border-box;
        width: 100%;
    }

    .input input:focus,.input textarea:focus {
        border: .1em solid #0f0;
        box-shadow: 0 0 0 1px #0f0, 0 0 0 6px rgba(0, 0, 0, 0.2),
            0 0 0 1px #0f0;
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
    }

    .input input:focus + a,
    .input input:not(:placeholder-shown) + a,
    .input textarea:focus + a,
    .input textarea:not(:placeholder-shown) + a {
        top: -25px;
        left: 0px;
        height: 15px;
        font-size: 18px;
        }

    .input input:focus + a,
    .input textarea:focus + a {
        color: #0f0;
    }
      
      input[type=submit]:hover {
        border: .1em solid #0f0;
        box-shadow: 0 0 0 1px #0f0, 0 0 0 6px rgba(0, 0, 0, 0.2),
            0 0 0 1px #0f0;
        color: #0f0;
    }
}
`;

const CommentFormHeader = styled.h2`
    box-sizing:border-box;
    display: block;
    margin: 10px auto;
    padding: 10px 0;
`;

const InputName = styled.div`
    grid-area: name / name / name / name;
    width: 100%;
`;

const InputEmail = styled.div`
    grid-area: email / email / email / email;
    width: 100%;
`;

const InputContent = styled.div`
    grid-area: textarea / textarea / textarea / textarea;
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
    background-color: #0f0;
    margin: 5px 0;
    padding: 5px;
    display: inline-block;
    border-radius: 3px;
    font-weight: bold;
}`;

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

