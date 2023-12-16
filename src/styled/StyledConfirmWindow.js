import styled from "styled-components";

const StyledDivWindow = styled.div`
    position: absolute;
    width: 25vw;
    height: 20vh;
    top: 10%;
    left: 20%;
    border: 2px solid red;
    background-color: white;
    z-index: 7;
`

const StyledButton = styled.button`
    padding: 5px 8px;
    border: 2px solid red;
    margin: 20px 10px;
    cursor: pointer;
`

const StyledConfirmWindow = (props) => {
    const {onClick} = props
    return (
        <StyledDivWindow>
            <form onClick={onClick}> 
            <StyledButton name="yes">Tak</StyledButton>
            <StyledButton name="no">Nie</StyledButton>
            </form>
        </StyledDivWindow>
    )
}

export default StyledConfirmWindow