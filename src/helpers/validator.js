import isEmail from 'validator/lib/isEmail'

export const validateFormLogIn = (loginEmail, loginPassword) => {
    const errorsLogIn = []
    if (!isEmail(loginEmail)) {
      errorsLogIn.push('Wpisz poprawnie adres email')
    }
  
    if (loginPassword.length < 6) {
      errorsLogIn.push('Hasło powinno zawierać co najmniej 6 znaków')
    }
    return errorsLogIn
  }
  
  export const validateFormCreateAccount = (email, password, repeat) => {
    const errorsCreateAccount = []
  
    if (!isEmail(email)) {
      errorsCreateAccount.push('Wpisz poprawnie adres email')
    }
    if (password.length < 6) {
      errorsCreateAccount.push('Hasło powinno zawierać co najmniej 6 znaków')
    }
  
    if (repeat !== password) {
      errorsCreateAccount.push('Hasła muszą być takie same')
    }
    return errorsCreateAccount
  }
  
  export const validateReset = (email) => {
    const errorsReset = []
  
    if (!isEmail(email)) {
      errorsReset.push('Wpisz poprawny email')
    }
  
    return errorsReset
  }
