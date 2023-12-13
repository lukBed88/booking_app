import React from "react";
import RegistrationForm from "../RegistrationForm";
import signUp from "../../auth/signUp";
import { validateFormCreateAccount } from "../../helpers/validator";
import { ContainerHome,StyledNavLink } from "../../components/ContainerHome";
import LoginLoader from "../../components/LoginLoader";
import RegistrationSuccess from "../../styled/StyledRegistrationSuccess";
import { ThemeProvider } from "styled-components";
import media from '../../styled/ResponseStyled'

export const RegistrationPanel = () => {

    const [isValue,setIsValue] = React.useState({})
    const [error, setIsError] = React.useState([])
    const [loginState, setIsLoginState] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [registration,setRegistration] = React.useState(false)

    const saveValue = (e) => {
        const { name,value } = e.target
        setIsValue({
          ...isValue,
          [name]: value
        })
      }
      const sendValue = async (e) => {
        e.preventDefault()
        const {email,password,repeatPassword} = isValue
        const validateErrors = validateFormCreateAccount(email,password,repeatPassword)
        setIsError(validateErrors)
        if(validateErrors.length === 0){
        try {
            setLoading(true)
            await signUp(email,password)
            setIsLoginState(true)
            setRegistration(true)
          } catch(error){
          setIsLoginState(false)
        } finally {
          setLoading(false)
        }
        }
}

return (
  <ThemeProvider theme={media}>
    <ContainerHome>
      {loading && <LoginLoader/>}
      {registration && <RegistrationSuccess/>}
    <RegistrationForm
        email = {'email'}
        pass = {'password'}
        passNameRepeat = {'repeatPassword'}
        nameChange = {saveValue}
        passChange = {saveValue}
        passRepeatChange = {saveValue}
        send = {(e) => sendValue(e)}
        error={error}
        loginState={loginState}
        />
        <StyledNavLink to = {'/'}>Powrót</StyledNavLink>
    </ContainerHome>
    </ThemeProvider>
)

}

export default RegistrationPanel