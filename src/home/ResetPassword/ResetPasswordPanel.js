import sendPasswordResetEmail from "../../auth/sendPasswordResetEmail"
import React from "react"
import { validateReset } from "../../helpers/validator"
import { ContainerHome, StyledNavLink } from "../../components/ContainerHome"
import ResetPasswordForm from "../ResetPasswordForm"
import { ThemeProvider } from "styled-components"
import media from '../../styled/ResponseStyled'

const ResetPasswordPanel = () => {

    const [isValue,setIsValue] = React.useState({})
    const [error, setIsError] = React.useState([])
    const [loginState, setIsLoginState] = React.useState([])

    const saveValue = (e) => {
        const { name,value } = e.target
        setIsValue({
          ...isValue,
          [name]: value
        })
      }
      const sendValue = async (e) => {
        e.preventDefault()
        const {email} = isValue
        const validateErrors = validateReset(email)
        setIsError(validateErrors)
        if(validateErrors.length === 0){
          await sendPasswordResetEmail(email)
          .then(() => {
            setIsLoginState(true)
        })
        .catch((error) => {
          setIsLoginState(false)
        })
        }
    }

    return (
      <ThemeProvider theme={media}>
        <ContainerHome>
        <ResetPasswordForm
        email={'email'}
        changeEmail = {saveValue}
        send = {(e) => sendValue(e)}
        error = {error}
        loginState = {loginState}
        />
        <StyledNavLink to = {'/'}>Powrót</StyledNavLink>
        </ContainerHome>
        </ThemeProvider>
    )
}

export default ResetPasswordPanel