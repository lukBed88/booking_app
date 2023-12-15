import styled from 'styled-components'
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
    @media ${props=> props.theme.media.tablet} {
        padding-bottom: 0;
        }
    @media ${props=> props.theme.media.mobile} {
          padding: 2px 0 0 0;
        }
`
const StyledText = styled.p`
    margin-top: 18px;
    font-size: 14px;
    letter-spacing: 1px;
    margin-block-start: 10px;
    margin-block-end: 0;
    text-align: center;
    @media ${props=> props.theme.media.tablet} {
          font-size: 13px;
        }
    @media ${props=> props.theme.media.mobile} {
          font-size: 11px;
        }
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

const LoaderIcon = styled(FontAwesomeIcon)`
    display: flex;
    justify-content: center;
    font-size: 40px;
    top: 0;
    left: 0;
    margin-top: 5px;
    color: rgb(80, 184, 231);
    @media ${props=> props.theme.media.tablet} {
          font-size: 35px;
        }
    @media ${props=> props.theme.media.mobile} {
          font-size: 25px;
        }
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