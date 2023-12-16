import styled from "styled-components";

const StyledDivWindow = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 27vw;
    height: 23vh;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(53, 47, 68);
    border-radius: 5px;
    z-index: 7;
    @media ${props=> props.theme.media.mobile} {
          width: 35vw;
          height: 17vh;
 }
`
const ContainerStyledButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    @media ${props=> props.theme.media.mobile} {
         justify-content: center;
 }
`

const StyledButton = styled.button`
    padding: 5px 8px;
    border: 1px solid white;
    margin: 20px 10px;
    padding: 9px 18px;
    background-color: transparent;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: .4s;
    &:hover {
        border: 1px solid transparent;
        background-color: rgba(80, 184, 231,0.5);
        transition: .4s;
    }

        @media ${props=> props.theme.media.mobile} {
          font-size: 12px;
          padding: 6px 12px;
          color: yellowgreen;
        }
`
const StyledMessage = styled.p`
    width: 85%;
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 25px auto;
    color: white;
    font-weight: 200;
    font-size: 16px;
    @media ${props=> props.theme.media.mobile} {
          margin: 15px auto;
          font-size: 12px;
 }
`

const StyledConfirmWindow = (props) => {
    const {onClick} = props
    return (
        <StyledDivWindow>
            <form onClick={onClick}> 
            <StyledMessage>Czy na pewno chcesz wykonać to zadanie?</StyledMessage>
            <ContainerStyledButton>
            <StyledButton name="yes">Tak</StyledButton>
            <StyledButton name="no">Nie</StyledButton>
            </ContainerStyledButton>
            </form>
        </StyledDivWindow>
    )
}

export default StyledConfirmWindow