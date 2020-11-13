import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";

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
  .list-test {
    margin-top: 20px;
  }
  .bottom {
    margin-top: 20px;
    display:flex;
    flex-direction: row;
    align-items: flex-end;
    &--test {
      align-items: center;
      margin-top: 0;
      padding: 15px 10px;
      &:not(:last-child) {
        border-bottom: 1px solid ${theme.backgroundDarkSecondary};
      }
    }
    .title {
      font-weight: bold;
      font-size: 13px;
      color: ${theme.textDarkPrimary};
      margin-bottom: 10px;
      &.done::after, &.not-done::after {
        font-size: 10px;
        text-transform: uppercase;
        border-radius: 2px;
        color: ${theme.textLight};
        padding: 4px;
        margin-left: 5px;
        border: 1px solid;
      }
      &.done:after {
        content: 'done';
        color: #4080E0;
        border-color: #4080E0;
      }
      &.not-done::after {
        content: 'not done';
        color: #F67A7C;
        border-color: #F67A7C;
      }
    }
    .total {
      font-weight: bold;
      font-size: 13px;
      color: ${theme.textDarkSecondary};
    }
    .show-detail {
      margin-left: auto;
      text-decoration: none;
      color: ${theme.textPrimary2};
      font-weight: 500;
      font-size: 12px;
      Button {
        border-radius: 5px;
        text-transform: none;
        color: ${theme.textLight};
        font-size: 13px;
      }
      &.done Button {
        background: linear-gradient(90deg, #2770C7 0%, #3499DA 100%);
        box-shadow: 0px 4px 10px rgba(50, 145, 217, 0.5);
      }
      &.not-done Button {
        background: linear-gradient(90deg, #F66469 0%, #F7864B 100%);
        box-shadow: 0px 4px 10px rgba(247, 134, 75, 0.5);
      }
    }
  }
`

export const SectionStaticsWrapper = styled.div`
  flex: 1;
  margin-left: 10px;
`
