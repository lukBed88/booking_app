const validationPatientForm = (patientFormValue) => {
    const requireKeys = ['imie', 'nazwisko', 'phoneNumber', 'pesel', 'adres']
    const miss = []
    let message = ''
    const missingKey = requireKeys.filter(key => !patientFormValue.hasOwnProperty(key));
    const patientFormValueArray = Object.entries(patientFormValue)
    const nameRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż]+$/;
    const phoneNumberRegex = /^[0-9]{9}$/
    const peselRegex = /^\d{11}$/
    const badValidation = {name:'',message:''}

    if (missingKey.length === 0) {
        patientFormValueArray.map(([name,value]) => {
        if((name === 'imie' && (!nameRegex.test(value) || value.length < 3))){
          message = 'Imię i nazwisko musi mieć 3 litery i nie mogą występować cyfry'
          const nBadValidation = {...badValidation}
          nBadValidation.name = name
          nBadValidation.message = message
          miss.push(nBadValidation)
        }
        if((name === 'nazwisko' && (!nameRegex.test(value) || value.length < 3))){
          message = 'Nazwisko musi mieć 3 litery i nie mogą występować cyfry'
          const nBadValidation = {...badValidation}
          nBadValidation.name = name
          nBadValidation.message = message
          miss.push(nBadValidation)
        }
        if(name === 'phoneNumber' && (!phoneNumberRegex.test(value) || value.length !== 9)){
          message = 'Numer telefonu musi mieć 9 cyfr'
          const nBadValidation = {...badValidation}
          nBadValidation.name = name
          nBadValidation.message = message
          miss.push(nBadValidation)
        }
        if(name === 'pesel' && (!peselRegex.test(value))){
          message = 'Pesel musi mieć 11 cyfr'
          const nBadValidation = {...badValidation}
          nBadValidation.name = name
          nBadValidation.message = message
          miss.push(nBadValidation)
        }
        if(name === 'adres' && value.length < 5){
          message = 'Podaj prawidłowy adres'
          const nBadValidation = {...badValidation}
          nBadValidation.name = name
          nBadValidation.message = message
          miss.push(nBadValidation)
        }

        })
      } else {
          missingKey.forEach(key => {
          message = ` Wypełnij pola zaznaczone na czerowo `
          const nBadValidation = {...badValidation}
          nBadValidation.name = key
          nBadValidation.message = message
          miss.push(nBadValidation)
        });
      }

      return miss
}

export default validationPatientForm