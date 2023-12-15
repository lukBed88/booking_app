import styled, { keyframes } from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const StyledLoginLoader = styled.div`
background-color: white;
width: 100%;
height: 100%;
position: absolute;
top: 0%;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
opacity:0.7;
`
const StyledHeader = styled.h4`
    font-family: 'Times New Roman', Times, serif;
    margin-top: 18px;
    font-size: 18px;
    letter-spacing: 1px;
    margin-block-start: 10px;
    margin-block-end: 0;
    @media ${props=> props.theme.media.tablet} {
          font-size: 17px
        }
    @media ${props=> props.theme.media.mobile} {
          font-size: 13px;
        }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled(FontAwesomeIcon)`
    display: flex;
    justify-content: center;
    font-size: 40px;
    top: 0;
    left: 0;
    transform: translate(-50%,-50%);
    color: skyblue;
    animation: ${spin};
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;  
    @media ${props=> props.theme.media.tablet} {
          font-size: 35px;
        }
    @media ${props=> props.theme.media.mobile} {
          font-size: 27px;
        }
` 
const LoginLoader = () => {
    
    return (
        <StyledLoginLoader>
            <LoaderIcon icon={faArrowsRotate}/>
            <StyledHeader>Ładowanie...</StyledHeader>
        </StyledLoginLoader>
    )
}
export default LoginLoader