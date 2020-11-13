import styled, { keyframes } from 'styled-components'
import { theme } from '../../utils/theme'

const fadeInBottom = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const MainContainer = styled.div`
  background: ${theme.backgroundBody};
  margin-top: 50px;
  padding-top: 20px;
  min-height: calc(100vh - 70px);
  & > * {
    animation: ${fadeInBottom} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`

export default MainContainer
