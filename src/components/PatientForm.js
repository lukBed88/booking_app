import React from "react";
import {faXmark,faUser,faSignature,faIdCard,faPhone,faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import validationPatientForm from "../helpers/validationPatientForm";
import {AddButton,ContainerForm,FormTitle,ContainerSendButton,InputForm,Form,InputContainer,IconForm,IconPatient,SendButton,CloseButton,ContainerErrorMessage,ErrorMessage} from '../styled/StyledPatientForm'

const PatientForm = (props) => {

    const {title,onChange,closeForm,data,changeState} = props
    const [mistakesForm,setIsMistakesForm] = React.useState([])

    const dataArray = [
            {name: 'imie',icon:faUser,correct:true,value:data["imie"] || ''},
            {name: 'nazwisko',icon:faSignature,correct:true,value:data["nazwisko"] || ''},
            {name: 'pesel',icon:faIdCard,correct:true,value:data["pesel"] || ''},
            {name: 'phoneNumber',icon:faPhone,correct:true,value:data["phoneNumber"] || ''},
            {name: 'adres',icon:faHouseChimney,correct:true,value:data["adres"] || ''},
        ]

    const sendPatientData = (e) => {
        e.preventDefault()
        const dataValidationArray = validationPatientForm(data)
        setIsMistakesForm(dataValidationArray)
        if(dataValidationArray.length === 0){
                changeState()
        }

    }
    const formMistakes = () => {        
        const errorsArray = mistakesForm.filter(key => !dataArray.hasOwnProperty(key));
        return dataArray.map((data) => {
                errorsArray.map((error) => {
                   if(data.name === error.name){
                        data.correct = false
                        return data
                      }
                })
                return data
        })
};

    const renderForm = () => {
        const checkDataArray = mistakesForm.length === 0 ? dataArray : formMistakes();

    return checkDataArray.map((item) => (
        <InputContainer key={item.name}>
          <IconForm icon={item.icon} />
          <InputForm
            key={item.name}
            border={item.correct}
            onChange={onChange}
            value={item.value}
            name={item.name}
            placeholder={item.name}
          />
        </InputContainer>
      ));
    }

    const printErrorMessage = (mistakesArr) => {
        
        return mistakesArr.map((message,index) => (
                <ErrorMessage key={index}>{message.message}</ErrorMessage>
                ))
    }

    return (
        <>
        <FormTitle><IconPatient icon={faUser}/>{title}</FormTitle>
        <CloseButton onClick={closeForm} icon={faXmark}/>
        <Form>
            {
                mistakesForm.length === 0 ?
                <>
                {renderForm()}
                </>
                :
                <>
                {renderForm(formMistakes())}
                <ContainerErrorMessage>
                        {printErrorMessage(mistakesForm)}
                </ContainerErrorMessage>
                </>
            }
                <ContainerSendButton>
                <SendButton
                onClick={(e) => sendPatientData(e)}
                >Zapisz pacjenta</SendButton>
                </ContainerSendButton>
        </Form>
        </>
    )
}

export {AddButton,ContainerForm,SendButton,PatientForm}
