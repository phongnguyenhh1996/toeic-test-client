import styled from "styled-components";

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