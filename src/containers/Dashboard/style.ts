import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";

export const DashboardWrapper = styled.div`
  background: ${theme.backgroundBody};
  margin-top: 50px;
  padding-top: 20px;
  min-height: calc(100vh - 70px);
`
export const ContentWrapperCss = () => css`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  .title {
    font-weight: bold;
    font-size: 14px;
    color: ${theme.textDarkPrimary}
  }
`

export const WeeklyOverview = styled.div`
  ${ContentWrapperCss()}
  .statitics {
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    align-items: center;
  }
  .statitics-content {
    text-align: center;
    font-weight: bold;
    .percent {
      span {
        font-size: 25px;
      }
    }
    .description {
      font-size: 12px;
      margin-top: 5px;
      color: ${theme.textDarkSecondary};
    }
  }
`

export const SectionStaticsWrapper = styled.div`
  flex: 1;
  margin-left: 5px;
`
