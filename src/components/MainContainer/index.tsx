import styled from 'styled-components/macro'
import { theme } from '../../utils/theme'

const MainContainer = styled.div`
  background: ${theme.backgroundBody};
  margin-top: 50px;
  padding-top: 20px;
  min-height: calc(100vh - 70px);
  padding-bottom: 20px;
`

export default MainContainer
