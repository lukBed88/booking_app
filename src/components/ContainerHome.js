import styled from "styled-components";
import { NavLink } from 'react-router-dom'

const ContainerHome = styled.div`
    position: absolute;
    display: flex;
    width: 27vw;
    top: 50%;
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
const StyledNavLink = styled(NavLink)`
    display: flex;
    width: 60%;
    justify-content: center;
    margin: 5px auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 0;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    transition: .4s;
    &:hover{
        background-color: rgb(80, 184, 231);
        border: 1px solid rgb(80, 184, 231);
        color: white;
    }
    @media ${props=> props.theme.media.mobile} {
       max-width: 50%;
       font-size: 14px;
  }
`
export {ContainerHome,StyledNavLink}