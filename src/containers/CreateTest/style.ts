import styled, { css } from "styled-components/macro";
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

interface UploadWrapperProps {
    isRowDirection: boolean
}

export const UploadWrapper = styled.div<UploadWrapperProps>`
    margin-top: 20px;
    display: flex;
    ${props => !props.isRowDirection ? css`
        flex-direction: column;
        align-items: center;
        & > * {
            margin-bottom: 20px;
        }
    }
    ` : css`
        justify-content: center;
        & > *:not(:last-child) {
            margin-right: 20px;
            margin-bottom: 20px;
        }
    `
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

interface MediaWrapperProps {
    width: string;
}

export const MediaWrapper = styled.div<MediaWrapperProps>`
    position: relative;
    width: ${props => props.width};
`

export const RemoveMedia = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    top: -15px;
    right: -12px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease;
    transform: scale(1.0);
    &:hover {
        transform: scale(1.1);
    }
`
