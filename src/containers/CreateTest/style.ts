import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Wrapper = styled.div`
    width: 1000px;
    margin: auto;
    display: flex;
    justify-content: flex-end;
`

export const MainContainer = styled.div`
    width: 660px;
    display: flex;
    flex-direction: column;
    height: 3000px;
    position: relative;
    z-index: 2;
`

export const SideContainer = styled.div`
    top: 70px;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
`

export const SideInner = styled.div`
    width: 1000px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
`

export const SideContent = styled.div`
    width: 315px;
    display: flex;
    flex-direction: column;
`

export const PartDescription = styled.div`
    background: ${theme.backgroundPaginationBtn};
    border-radius: 5px;
    padding: 20px 15px;
    color: ${theme.textPrimary};
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
`

export const UploadWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    & > *:not(:last-child) {
        margin-right: 20px;
    }
`

export const NavigationBtnGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > *:not(:last-child) {
        margin-right: 20px;
    }
    margin-top: 20px;
`
