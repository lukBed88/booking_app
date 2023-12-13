const doctorList = (doctorTab) => {

    const doctorName = doctorTab.map(item => {
        const id = item[0];
        return Object.values(item)
            .map(doctor => ({
                name: doctor?.name,
                surname: doctor?.surname,
                id,
                specialization: doctor.specialization,
                phoneNumber: doctor.phoneNumber
            }))
            .filter(item => item && item.name && item.surname);
    });
    return doctorName
}

export default doctorList