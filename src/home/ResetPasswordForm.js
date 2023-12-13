import React from "react";
import { StyledHeader,ContainerStyledInput,StyledInput,IconFontAwesome,StyledButton,ErrorMessage } from '../styled/StyledLoginPanel';
import {faAt} from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider } from "styled-components";
import media from "../styled/ResponseStyled";

const ResetPasswordForm = (props) => {
    const {email,changeEmail,send,error,loginState} = props
    
    const printErrorMessage = (error) => {
        return error.map((message) => {
            return (
                <ErrorMessage>{message}</ErrorMessage>
            )
        })
    }

    return (
        <>
        <ThemeProvider theme={media}>
        <StyledHeader>Reset hasła</StyledHeader>
        <form>
        <ContainerStyledInput>
            <IconFontAwesome icon={faAt}/>
        <StyledInput
        type="text"
        name = {email}
        onChange = {changeEmail}
        placeholder="Email"
        />
        </ContainerStyledInput>
        {error.length === 0 ? null : <div>{printErrorMessage(error)}</div>}
        {error.length === 0 && loginState === false ? 
        <ErrorMessage>Taki email nie istnieje</ErrorMessage>
        : null}
    <StyledButton 
    type="submit"
    onClick={send}
    >Zresetuj hasło</StyledButton>
    </form>
    </ThemeProvider>
    </>
    )
}

export default ResetPasswordForm