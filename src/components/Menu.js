import React from "react";
import { ContainerMenu,ContainerNavLink,StyledNavLink,StyledIconFontAwesomeSettings,StyledButton, StyledIconFontAwesome,UlOption,LiOptions } from '../styled/StyledMenu';
import {faGear,faHouse} from '@fortawesome/free-solid-svg-icons'
import { logOut } from "../auth";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import media from '../styled/ResponseStyled'
import StyledConfirmWindow from "../styled/StyledConfirmWindow";

const Welcome = (props) => {
    const {onClick,clearFlags,userData} = props

    const [active,setIsActive] = React.useState(false)
    const [remove,isRemove] = React.useState(false)

    const navigation = useNavigate()

    const logOutAccount = async (e) => {
        e.preventDefault()
        const { name } = e.target
        if(name === 'yes'){
            await logOut()
            navigation('/')
        }

        isRemove(false)
    }

    const renderOptions = () => {
        return (
            <>
                <LiOptions onClick={() => isRemove(true)}>Wyloguj się</LiOptions>
                <LiOptions>{userData.email}</LiOptions>
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
        {
            remove === true ?
            <StyledConfirmWindow
                onClick={(e) => logOutAccount(e)}
            />
            :
            null
        }
        </ThemeProvider>
    )
}

export default Welcome
