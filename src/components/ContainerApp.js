import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
`

const OverlayContainer  = styled.div`
    position: absolute;
    top: ${(props) => props.search ? '0' : '9%'};
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.6);
`

export  {Container,OverlayContainer }