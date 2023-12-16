import styled, {keyframes} from "styled-components";
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const slideDown = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 12vh;
  }
`;

const slideUp = keyframes`
  0% {
    opacity: 1;
    height: 12vh;
  }
  100% {
    opacity: 0;
    height: 0;
  }
`;

const ContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
    /* border-bottom-left-radius: 10px; */
    /* border-bottom-right-radius: 10px; */
    justify-content: space-between;
    background-color: #0E86D4;
    margin-bottom: 20px;
`
const ContainerNavLink = styled.div`
    display: flex;
    width: 30%;
    flex-direction: row;
    justify-content: space-around;
    @media ${props=> props.theme.media.tablet} {
        font-size: 16px;
        width: 55vw;
        font-size: 14px;
  }
    @media ${props=> props.theme.media.mobile} {
        justify-content: space-between;
        width: 70vw;
        font-size: 14px;
  }
`
const StyledButton = styled.button`
    font-size: 18px;
    border: none;
    color: white;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        color: yellow;
    }
    @media ${props=> props.theme.media.tablet} {
        width: 45%;
        font-size: 18px;
  }
    @media ${props=> props.theme.media.mobile} {
        width: 45%;
        font-size: 14px;
  }
`
const StyledNavLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    font-size: 17px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    margin-right: 70px;
    &:hover {
        transition: 0.3s;
        color: #F1F1F1;
    }
    @media ${props=> props.theme.media.mobile} {
        margin-right: 50px;
  }
    @media ${props=> props.theme.media.mobile} {
        margin-right: 20px;
        font-size: 10px;
  }
`
const StyledIconFontAwesome = styled(FontAwesomeIcon)`
    margin-left: 40px;
    font-size: 22px;
    color: white;
    cursor: pointer;
    &:hover {
      color: yellow;
        transition: 0.3s;
    }
    @media ${props=> props.theme.media.mobile} {
        margin-left: 20px;
        font-size: 18px;
  }
`
const StyledIconFontAwesomeSettings = styled(FontAwesomeIcon)`
    display: flex;
    font-size: 22px;
    color: white;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        color: yellow;
    }
    @media ${props=> props.theme.media.mobile} {
        font-size: 18px;
  }
    @media ${props=> props.theme.media.mobile} {
        font-size: 18px;
  }
`
const UlOption = styled.ul`
  display: flex;
  position: absolute;
  top:8.5%;
  right: 0.2%;
  height: ${(props) => (props.isOpen ? "12vh" : "0")};
  width: 12vw;
  padding: 3px 5px 7px 4px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  border: 1px solid rgb(80, 184, 231);
  color: white;
  background-color: rgb(14, 134, 212);
  animation: ${(props) => (props.isOpen ? slideDown : slideUp)} 0.5s ease;
  border-radius: 3px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
    @media ${props=> props.theme.media.tablet} {
        right: 0.3%;
        font-size: 14px;
        }
      @media screen and (min-width: 598px) and (max-width: 820px) {
        width: 15vw;
        right: 0.4%;
        top: 8.8%;
    }
    @media ${props=> props.theme.media.mobile} {
        width: 20vw;
        right: 0.6%;
        top: 8.1%;
        }
`
const LiOptions = styled.li`
    width: 100%;
    margin: 8px 0;
    padding: 3px 0 3px 5px;
    list-style: none;
    cursor: pointer;
    overflow-wrap: break-word;
    word-wrap: break-word;
    transition: .3s;
    &:hover {
        transition: .3s;
        color: white;
        background-color: rgb(80, 184, 231);
    }

    @media ${props=> props.theme.media.tablet} {
        font-size: 14px;
        }
      @media screen and (min-width: 598px) and (max-width: 820px) {
        padding-left: 2px;
        font-size: 13px;
    }
    @media ${props=> props.theme.media.mobile} {
        padding-left: 2px;
        font-size: 12px;
        }
`
export {ContainerMenu,ContainerNavLink,StyledNavLink,StyledIconFontAwesome,StyledIconFontAwesomeSettings,StyledButton,UlOption,LiOptions}