import styled from "styled-components";
import Select from "react-select";

const SelectDoctorsOption = styled(Select)`
    display: inline-block;
    width:15vw; 
    max-width: 25vw; 
    height: auto; 
    margin-left: 20px;
    margin-right: 10px;
    &::placeholder {
        color: red;
    }

  @media ${props=> props.theme.media.tablet} {
    width: 25vw;
    font-size: 14px;
}
  @media ${props=> props.theme.media.mobile} {
    margin-left: 10px;
    width: 25vw;
    font-size: 10px;
}
`

const Option = styled.option`
    outline: 0;
`

export {SelectDoctorsOption,Option}