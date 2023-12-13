import styled, { keyframes } from 'styled-components'
import StyledFullPageLoader from '../styled/StyledFullPageLoader'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled(FontAwesomeIcon)`
    font-size: 40px;
    color: skyblue;
    animation: ${spin};
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;  
` 
const Loader = () => {
    
    return (
        <StyledFullPageLoader>
            <LoaderIcon icon={faSpinner}/>
        </StyledFullPageLoader>
    )
}
export default Loader