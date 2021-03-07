import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import { ContentWrapperCss } from "../Dashboard/style";

export const Wrapper = styled.div`
  ${ContentWrapperCss()}
`

interface IconWrapperProps {
  $bg: string
}

export const FiguresWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.$bg};
  flex-shrink: 0;
`

export const Figures = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const FiguresNumb = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 17px;
`

export const FiguresDescription = styled.div`
  color: ${theme.textDarkSecondary};
  font-size: 14px;
`

export const ChartGrid = styled(Grid)`
  margin-top: 10px;
`
