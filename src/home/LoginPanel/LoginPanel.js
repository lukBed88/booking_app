import React from "react";
import { useNavigate } from 'react-router-dom'
import LoginForm from "../LoginForm";
import signIn from "../../auth/signIn";
import {ContainerHome,StyledNavLink} from "../../components/ContainerHome";
import { validateFormLogIn } from "../../helpers/validator";
import LoginLoader from "../../components/LoginLoader";
import { ThemeProvider } from "styled-components";
import media from '../../styled/ResponseStyled'

const LoginPanel = () => {

    const navigate = useNavigate()
    const [isValue, setIsValue] = React.useState({})
    const [error, setIsError] = React.useState([])
    const [loginState, setIsLoginState] = React.useState([])
    const [loading,setLoading] = React.useState(false)

    const saveValue = (e) => {
      const { name,value } = e.target
      setIsValue({
        ...isValue,
        [name]: value
      })
    }
    const sendValue = async (e) => {
      e.preventDefault()
      const {email,password} = isValue
      const validateErrors = validateFormLogIn(email,password)
      setIsError(validateErrors)
      if(validateErrors.length === 0){
        try {
          setLoading(true)
          await signIn(email, password);
          setIsLoginState(true);
          navigate('/calendar');
        } catch (error) {
          setIsLoginState(false);
        } finally {
          setLoading(false)
        }
      }
    }

return (
  <ThemeProvider theme={media}>
  <ContainerHome>
    {loading && <LoginLoader/>}
    <LoginForm
    email = {'email'}
    pass = {'password'}
    nameChange = {(e) => saveValue(e)}
    passName = {(e) => saveValue(e)}
    send = {(e) => sendValue(e)}
    error = {error}
    loginState= {loginState}
    />
  <StyledNavLink to = {'/'}>Powrót</StyledNavLink>
    </ContainerHome>
  </ThemeProvider>
    )
}

export default LoginPanel