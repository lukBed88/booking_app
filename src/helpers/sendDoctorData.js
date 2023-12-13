import postDoctorData from "../apiEndpoints/postDoctorData"

const sendDoctorData = async (doctorFormValue,changeState) => {

    const doctorData = {officeHours:{}}
    for(const key in doctorFormValue){
        if(key.startsWith('patient-') && doctorFormValue[key].length > 0){
            doctorData.officeHours[key] = doctorFormValue[key]
    }
    else if(doctorFormValue[key].length > 0){
        doctorData[key] = doctorFormValue[key]
    }
}
    await postDoctorData(doctorData)
    changeState()

}
export default sendDoctorData