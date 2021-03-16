import Grid from "@material-ui/core/Grid";
import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";
import { ContentWrapperCss } from "../Dashboard/style";

export const Wrapper = styled.div`
  ${ContentWrapperCss()}
  height: 100%;
`

interface IconWrapperProps {
  $bg: string
}

export const FiguresWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
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
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`

export const FiguresNumb = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 17px;
`

export const FiguresDescription = styled.div`
  color: ${theme.textDark2};
  font-size: 14px;
`

export const ChartGrid = styled(Grid)`
  margin-top: 10px;
`

export const ChartLegend = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`

interface LegendItemProps {
  $color: string
}

export const LegendItem = styled.div<LegendItemProps>`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  &:before {
    display: block;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.$color};
    margin-right: 5px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 10px;
`
interface ListItemProps {
  $bg?: string
}

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  color: ${theme.textDarkPrimary};
  margin-top: 15px;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 8px;
  border-radius: 5px;
  ${props => props.$bg && css`
    background-color: ${props.$bg};
  `}
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);

`

export const TestInfor = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
`

export const NameInfo = styled.div`
`

export const DateInfo = styled.div`
  color: ${theme.textDarkSecondary};
  margin-top: 5px;
`

export const LiNumber = styled.div`
  margin-left: auto;
  flex-grow: 0;
  font-size: 18px;
  font-weight: bold;
`
