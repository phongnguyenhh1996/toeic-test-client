import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";
import Button from "@material-ui/core/Button";

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

export const AvatarSection = styled.div`
  display: flex;
  .avatar-wrapper{
    width: 90px;
    height: 90px;
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .info-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 10px;
    .name {
      font-size: 15px;
      font-weight: bold;
      color: ${theme.textDarkPrimary};
      margin-bottom: 10px;
    }
    .role {
      font-weight: bold;
      font-size: 14px;
      color: ${theme.textDarkSecondary};
    }
    .edit-btn {
      margin-top: auto;
      flex-grow: 0;
      padding: 0 8px;
      margin-left: auto;
    }
  }
`

export const TitleSection = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  .icon-wrapper {
    background: ${theme.backgroundSecondary};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    color: ${theme.textLight};
    font-size: 20px;
    margin-right: 10px;
  }
  .title {
    font-weight: bold;
    font-size: 18px;
    color: ${theme.textDarkPrimary};
  }
`
export const TestItem = styled.div`
  ${ContentWrapperCss()}
  transition: all .2s ease;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px) scale(1.01);
  }
  padding: 10px;
  overflow: hidden;
  cursor:pointer;
  .bg-img {
    margin: -10px;
    margin-bottom: 10px;
    padding-top: 56.25%;
    background-color: ${theme.backgroundDarkSecondary};
    background-size:cover;
    background-position:center;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    .title {
      font-weight: bold;
      font-size: 13px;
      color: ${theme.textDarkPrimary};
      margin-bottom: 5px;
    }
    .author {
      font-weight: bold;
      font-size: 11px;
      color: ${theme.textDarkSecondary};
    }
  }
  .info-wrapper {
    margin-top: 10px;
    display: flex;
  }
  .status-wrapper {
    display: flex;
    align-items: center;
    margin-right: 10px;
    flex-wrap: wrap;
    .status-label {
      flex-grow: 0;
      background: #fff;
      border: 1px solid ${theme.textPrimary};
      box-sizing: border-box;
    
      &.done {
        color: ${theme.textPrimary3};
        border-color:${theme.textPrimary3}
      }
      border-radius: 2px;
      padding: 4px 6px;
      color: ${theme.textPrimary};
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 600;
      &:not(:last-child) {
        margin-right: 5px;
        @media (max-width: 1279px) {
          margin-bottom: 5px;
        }
      }
    }
  }
  .viewer-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    @media (max-width: 1279px) {
      align-items: flex-end;
    }
  }
  .viewer-item {
    display: flex;
    font-size: 12px;
    .viewer-icon {
      color: #4080E0;
      margin-right: 2px;
      &.heart {
        color: #F66469;
      }
    }
    .viewer-count {
      font-weight: bold;
      color: ${theme.textDarkPrimary};
    }
    &:not(:last-child) {
      margin-right: 7px;
    }
  }
`

export const TestSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SeeMoreBtn = styled(Button)`
  background: rgba(108, 197, 124, 0.31);
  border-radius: 4px;
  color: ${theme.textPrimary};
  margin-left: auto;
  margin-top: 20px;
  padding: 6px 12px;
  font-size: 13px;
  text-transform: none;
  font-weight: bold;
`
