/* eslint-disable array-callback-return */
const patientList = (patientTab) => {
    if(patientTab.length > 0){
    const patientsName = patientTab.map((item) => {
        const id = item[0]
        return Object.values(item)
            .map((item) => {
                if((item?.patient?.imie) && (item?.patient?.nazwisko)){
                    return {
                        name : item?.patient?.imie,
                        surname : item?.patient?.nazwisko,
                        id: id
                    } 
                }
            }).filter((item) => item)
    })
    return patientsName
}
}

export default patientList