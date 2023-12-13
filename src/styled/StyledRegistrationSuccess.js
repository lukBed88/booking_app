import styled, { keyframes } from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'

const StyledRegistration = styled.div`
width: 100%;
height: auto;
padding: 10px 0;
background-color: white;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
opacity:1;
transition: 2s;
`
const StyledText = styled.p`
    margin-top: 18px;
    font-size: 14px;
    letter-spacing: 1px;
    margin-block-start: 10px;
    margin-block-end: 0;
    text-align: center;
`
const StyledNavLink = styled(NavLink)`
    color: rgb(67, 166, 198);
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
    &:hover{
      color:rgb(80, 184, 231);
      transition: 0.3s;
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
    margin-top: 10px;
    color: rgb(80, 184, 231);
` 
const RegistrationSuccess = () => {
    
    return (
        <StyledRegistration>
            <LoaderIcon icon={faCircleCheck}/>
            <StyledText>Rejestracja przebiegła pomyślnie!Możesz się <StyledNavLink to={'/login'}>zalogować</StyledNavLink></StyledText>
        </StyledRegistration>
    )
}
export default RegistrationSuccess