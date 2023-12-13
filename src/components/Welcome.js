import React from "react";
import { ContainerMenu,ContainerNavLink,StyledNavLink,StyledIconFontAwesomeSettings,StyledButton, StyledIconFontAwesome,UlOption,LiOptions } from '../styled/StyledMenu';
import {faGear,faHouse} from '@fortawesome/free-solid-svg-icons'
import { logOut } from "../auth";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import media from '../styled/ResponseStyled'

const Welcome = (props) => {
    const {onClick,clearFlags} = props

    const [active,setIsActive] = React.useState(false)
    const navigation = useNavigate()

    const logOutAccount = async () => {
        await logOut()
        navigation('/')
    }

    const renderOptions = () => {
        return (
            <>
                <LiOptions onClick={() => logOutAccount()}>Wyloguj się</LiOptions>
                <LiOptions>Usuń konto</LiOptions>
            </>
        )
    }
    return (
        <ThemeProvider theme={media}>
        <ContainerMenu>
            <StyledIconFontAwesome onClick={clearFlags} className={'home'} icon={faHouse}/>
            <ContainerNavLink>
            <StyledButton onClick ={onClick} name={'doctor'}>Lista lekarzy</StyledButton>
            <StyledButton onClick ={onClick} name={'patient'}>Lista pacjentów</StyledButton>
            </ContainerNavLink>
            <StyledNavLink><StyledIconFontAwesomeSettings onClick={() => setIsActive(prevActive => !prevActive)} icon={faGear}/></StyledNavLink>            
                <UlOption isOpen={active}>
                {renderOptions()}
                </UlOption>
        </ContainerMenu>
        </ThemeProvider>
    )
}

export default Welcome
