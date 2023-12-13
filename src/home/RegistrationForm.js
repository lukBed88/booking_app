import React from "react";
import { StyledHeader,ContainerStyledInput,StyledInput,IconFontAwesome,StyledButton,ErrorMessage } from '../styled/StyledLoginPanel';
import {faAt,faKey} from '@fortawesome/free-solid-svg-icons' 

export const RegistrationForm = (props) => {
    const {email,pass,passNameRepeat,passChange,nameChange,passRepeatChange,send,error,loginState} = props
    
    const printErrorMessage = (error) => {
        return error.map((message) => {
            return (
                <ErrorMessage>{message}</ErrorMessage>
            )
        })
    }

    return (
        <>
        <StyledHeader>Rejestracja</StyledHeader>
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
        onChange = {passChange}
        placeholder="Hasło"
        />
        </ContainerStyledInput>
        <ContainerStyledInput>
            <IconFontAwesome icon={faKey}/>
        <StyledInput
        type="password"
        name = {passNameRepeat}
        onChange = {passRepeatChange}
        placeholder="Powtórz hasło"
        />
        </ContainerStyledInput>
        {error.length === 0 ? null : <div>{printErrorMessage(error)}</div>}
        {error.length === 0 && loginState === false ? 
        <ErrorMessage>Taki email już istnieje</ErrorMessage>
        : null}
    <StyledButton 
    type="submit"
    onClick={send}
    >Zarejestruj się</StyledButton>
    </form>
    </>
    )
}

export default RegistrationForm