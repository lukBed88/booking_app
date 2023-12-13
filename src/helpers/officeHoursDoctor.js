/* eslint-disable array-callback-return */
const officeHoursDoctor = (tab,selectOption) => {

    const officeHours = tab.map((data) => {
        if(data[0] === selectOption && data[1]?.officeHours){
            return data[1]?.officeHours
        }
    }).filter((data) => data)

    return officeHours
}

export default officeHoursDoctor