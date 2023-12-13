import React from "react";
import { SelectDoctorsOption } from "../styled/StyledSelectDoctors";

const SelectDoctors = (props) => {
  
    const {doctorArray,onChange,doctorId} = props

    const options = doctorArray && doctorArray.map((doctor) => ({
        value: doctor.idDoctor,
        label: doctor.doctor,
        
      }));
    
        const selectedOption = options.find((doctor) => doctor.value === doctorId);

    return (
        <>
      <SelectDoctorsOption
        options={options}
        onChange={onChange}
        placeholder={'Wybierz lekarza'}
        value={selectedOption !== undefined ? selectedOption : null}
      >
        </SelectDoctorsOption>  
    </>
    )
 

}

export default SelectDoctors
