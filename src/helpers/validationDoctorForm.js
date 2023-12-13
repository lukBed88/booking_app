const validationDoctorForm = (doctorFormValue) => {
    const requireKeys = ['name', 'surname', 'phoneNumber']
    const miss = []
    let message = ''
    const missingKey = requireKeys.filter(key => !doctorFormValue.hasOwnProperty(key));
    const patientFormValueArray = Object.entries(doctorFormValue)
    const nameRegex = /^[A-Za-z]+$/
    const phoneNumberRegex = /^[0-9]{9}$/
    const badValidation = {name:'',message:''}

    if (missingKey.length === 0) {
        patientFormValueArray.map(([name,value]) => {
        if((name === 'name' && (!nameRegex.test(value) || value.length < 3))){
          message = 'Imię i nazwisko musi mieć 3 litery i nie mogą występować cyfry'
          const nBadValidation = {...badValidation}
          nBadValidation.name = name
          nBadValidation.message = message
          miss.push(nBadValidation)
        }
        if((name === 'surname' && (!nameRegex.test(value) || value.length < 3))){
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
        }})
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

const validationSpecializationDoctorForm = (doctorFormValue) => {
    const requireKeys = ['specialization']
    const missingKey = requireKeys.filter(key => !doctorFormValue.hasOwnProperty(key));
    const badValidation = {name:'',message:''}
    const miss = []
    let message = ''
    const patientFormValueArray = Object.entries(doctorFormValue)
    if (missingKey.length === 0) {
    patientFormValueArray.map(([name,value]) => {
        if((name === 'specialization' && value === '')){
          message = 'Wybierz prawidłową specjalizację'
          const nBadValidation = {...badValidation}
          nBadValidation.name = name
          nBadValidation.message = message
          miss.push(nBadValidation)
        }
    });
}   else {
    missingKey.forEach(key => {
    message = ` Nie wybrałeś specjalizacji `
    const nBadValidation = {...badValidation}
    nBadValidation.name = key
    nBadValidation.message = message
    miss.push(nBadValidation)
  });
}
    return miss
}
const validationOfficeHoursDoctorForm = (doctorFormValue) => {
    const badValidation = {name:'',message:''}
    const miss = []
    let message = ''
    const officeHoursArray = Object.entries(doctorFormValue)
    .filter(([name, value]) => name.startsWith('patient-') && value !== "")
    .map(([name, value]) => ({ name, value }));

    if(officeHoursArray.length > 0){
        miss.push(officeHoursArray)
        return miss
    }
    else if(officeHoursArray.length === 0){
        message = 'Musisz wybrać co najmniej jeden slot'
        badValidation.message = message
        miss.push(badValidation)
        return miss
    }

    return miss
}

export {validationDoctorForm,validationSpecializationDoctorForm,validationOfficeHoursDoctorForm}

