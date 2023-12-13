import React from "react";
import { StyledHeader,ContainerStyledInput,StyledInput,IconFontAwesome,StyledButton,ErrorMessage } from '../styled/StyledLoginPanel';
import {faAt,faKey} from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider } from "styled-components";
import media from "../styled/ResponseStyled";

export const LoginForm = (props) => {
    const {email,pass,nameChange,passName,send,error,loginState} = props

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
        <StyledHeader>Logowanie</StyledHeader>
        <form>
            <ContainerStyledInput>
            <IconFontAwesome icon={faAt}/>
            <StyledInput
            type="text"
            name = {email}
            onChange = {nameChange}
            placeholder="Email"
            />
            </ContainerStyledInput>
            <ContainerStyledInput>
            <IconFontAwesome icon={faKey}/>
            <StyledInput
            type="password"
            name = {pass}
            onChange = {passName}
            placeholder="Password"
            />
            </ContainerStyledInput>
        {error.length === 0 ? null : <div>{printErrorMessage(error)}</div>}
        {error.length === 0 && loginState === false ? 
        <ErrorMessage>Nieprawidłowe dane logowania</ErrorMessage>
        : null}
        <StyledButton 
        type="submit"
        onClick={send}
        >Zaloguj</StyledButton>
        </form>
        </ThemeProvider>
        </>
    )
}

export default LoginForm