const renderChoicePatient = (patientsNameArr,startData,selectedOptionPatients) => {
    const arrayPatientName = patientsNameArr.map((patient) => patient[0]).map((patient) => `${patient.surname} ${patient.name}`)
    const selectChoicePatientNames = Object.entries(selectedOptionPatients).map((patientName) =>patientName[1].patient)
    if(startData.length > 0){
        const startDataArray = Object.values(startData[0]);
        const remainPatient = arrayPatientName.filter(
            (name) => !startDataArray.includes(name));
            const filterRemainPatient = remainPatient.filter(
                (name) => !selectChoicePatientNames.includes(name));
                return filterRemainPatient;
    }
    else {
        const filterRemainPatient = arrayPatientName.filter(
            (name) => !selectChoicePatientNames.includes(name));
            return filterRemainPatient;
    }
}

export default renderChoicePatient