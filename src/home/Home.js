import React from "react";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import media from '../styled/ResponseStyled'

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 25vw;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid black;
    flex-direction: column;
    margin: 0 auto;
    padding: 30px 0;
    @media ${props=> props.theme.media.mobile} {
       padding: 15px 0;
  }
`
const Header = styled.h2`
    display: flex;
    width: 50%;
    margin: 10px auto 40px auto;
    justify-content: center;
    color:rgb(67, 166, 198);
    @media ${props=> props.theme.media.mobile} {
        margin: 10px auto 20px auto;
        font-size: 20px;
        padding-bottom: 5px;
        text-align: center;
  }
`
const StyledNavLink = styled(NavLink)`
    display: flex;
    width: 50%;
    text-align: center;
    justify-content: center;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 5px;
    font-size: 16px;
    text-decoration: none;
    color:rgb(67, 166, 198);
    cursor: pointer;
    transition: .4s;
    &:hover{
        background-color: rgb(80, 184, 231);
        border: 1px solid rgb(80, 184, 231);
        color: white;
    }
    @media ${props=> props.theme.media.mobile} {
        width: 54%;
        margin: 5px auto;
        font-size: 13px;
  }
`
const Home = () => {
    
    return (
        <ThemeProvider theme={media}>
        <Container>
        <Header>Witaj</Header>
        <StyledNavLink to = {'/login'}>Zaloguj się</StyledNavLink>
        <StyledNavLink to = {'/registration'}>Zarejestruj się</StyledNavLink>
        <StyledNavLink to = {'/resetPassword'}>Przypomnij hasło</StyledNavLink>
        </Container>
        </ThemeProvider>
    )

}
export default Home