import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const AddButton = styled.button`
        font-size: 16px;
        background-color: transparent;
        border: 1px solid black;
        padding: 8px 7px;
        margin: 0 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transition: 0.4s;
          color: white;
          background-color: #50b8e7;
          border: 1px solid #50b8e7;       
        }
        @media ${props=> props.theme.media.mobile} {
          font-size: 13px;
          padding: 6px 5px;
          margin: 0 10px;
        }
`
const ContainerForm = styled.div`
        position: relative;
        width: 25vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%,0);
        border: 2px solid black;
        border-radius: 18px;
        background-color: white;
        z-index: 2;

        @media ${props=> props.theme.media.tablet} {
          border: 2px solid blue;
          width: 40vw;
        }
        @media ${props=> props.theme.media.mobile} {
          width: 60vw;
        }

`
const FormTitle = styled.h3`
        width: 100%;
        color: white;
        text-align: center;
        padding: 25px 0;
        background-color: rgb(80, 184, 231);
        font-weight: 200;
        letter-spacing: 1px;
        margin-block-start:0;
        margin-block-end:0;
        margin-bottom: 10px;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
        @media ${props=> props.theme.media.mobile} {
          font-size: 1rem;
          padding: 15px 0;
        }
`
const ContainerSendButton = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 30px 0;
        @media ${props=> props.theme.media.mobile} {
          margin: 20px 0;
        }
`
const InputContainer = styled.div`
        display:flex;
        justify-content: center;
        font-size: 16px;
        margin: 15px;
        align-items: flex-end;
        @media ${props=> props.theme.media.mobile} {
          margin: 8px auto;
          width: 75%;
        }
` 
const InputForm = styled.input`
        font-size: 16px;
        width: 55%;
        border: none;
        border-bottom: ${(props) => (props.border ? '2px solid rgb(80, 184, 231)' : '2px solid #FF1205')};
        outline: 0;
        padding: 5px;
        ::placeholder {
         font-size: 16px;
         padding-left: 10px;
         color: ${(props) => (props.border ? 'grey' : '#FF1205')};

        @media ${props=> props.theme.media.tablet} {
           font-size: 14px;
        }
        @media ${props=> props.theme.media.mobile} {
           font-size: 14px;
           padding-left: 15px;
        }
        }
        @media ${props=> props.theme.media.tablet} {

        }
        @media ${props=> props.theme.media.mobile} {
          width: 80%;
        }
`
const Form = styled.form`
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
`
const IconForm = styled(FontAwesomeIcon)`
     font-size:22px;
     color:rgb(80, 184, 231);
     vertical-align: 100px;
     margin-right: 20px;

     @media ${props=> props.theme.media.mobile} {
          border: 2px solid red;
          width: 60vw;
          display: none;
        }
`
const IconPatient = styled(FontAwesomeIcon)`
     font-size:22px;
     color:white;
     margin-right: 20px;
     @media ${props=> props.theme.media.tablet} {

        }
     @media ${props=> props.theme.media.mobile} {
        font-size: 16px;
        }
`
const SendButton = styled.button`
        font-size: 16px;
        background-color: transparent;
        border: 1px solid rgb(80, 184, 231);
        padding: 8px 10px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transition: 0.4s;
          color: white;
          background-color: #50b8e7;
          border: 1px solid #50b8e7;       
        }
        @media ${props=> props.theme.media.tablet} {
          max-width: 40vw;
        }
        @media ${props=> props.theme.media.mobile} {
          font-size: 13px;
          padding: 10px 12px;
        }
`
const CloseButton = styled(FontAwesomeIcon)`
    position: absolute;
    top:5%;
    left: 93%;
    transform: translate(-50%,-50%);
    font-size: 20px;
    transition:all 0.4s;
    color: white;
    cursor: pointer;
    &:hover {
        transition:all 0.4s;
        color: black;
    }
    @media ${props=> props.theme.media.mobile} {
          font-size: 16px
        }
`
const ContainerErrorMessage = styled.div`
`
const ErrorMessage = styled.p`
        margin-block-start: 1em;
        margin-block-end: 1em;
        font-size: 14px;
        color: #FF1205;
`

export {AddButton,
    ContainerForm,
    FormTitle,
    ContainerSendButton,
    InputForm,
    Form,
    InputContainer,
    IconForm,
    IconPatient,
    SendButton,
    CloseButton,
    ContainerErrorMessage,
    ErrorMessage}