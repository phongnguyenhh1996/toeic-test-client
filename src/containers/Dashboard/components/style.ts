import styled from "styled-components/macro";
import { theme } from "../../../utils/theme"
import { SectionStaticsProps } from "./SectionStatics";
import { ContentWrapperCss } from "../style";

export const NodataWrapper = styled.div`
  ${ContentWrapperCss()}
`

export const SectionStaticsStyled = styled.div<SectionStaticsProps>`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 10px;
  }
  .icon-wrapper {
    width: 35px;
    height: 35px;
    background: linear-gradient(135deg, ${props => props.colorArr[0]} 0%, ${props => props.colorArr[1]} 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${theme.textLight};
    margin-right: 8px;
  }
  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    .info {
      display: flex;
      font-weight: bold;
      font-size: 12px;
      .name {
        color: ${theme.textDarkPrimary};
      }
      .percent {
        color: ${theme.textDarkPrimary};
        margin-left: auto;
      }
    }
    .progress-bar {
      height: 5px;
      width: 100%;
      position: relative;
      background-color: ${theme.backgroundDarkSecondary};
      border-radius: 5px;
      margin-top: 5px;
      &:after {
        position: absolute;
        content: '';
        border-radius: 5px;
        top: 0;
        left: 0;
        width: ${props => props.percent}%;
        height: 100%;
        background: linear-gradient(90deg, ${props => props.colorArr[0]} 0%, ${props => props.colorArr[1]} 100%);
        box-shadow: 0px 4px 10px rgba(${props => props.colorArr[2]});
      }
    }
  }
`

