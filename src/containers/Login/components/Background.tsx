import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'

const Wrapper = styled.div`
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, ${theme.backgroundSecondary} 0%, ${theme.backgroundPrimary} 100%);
    position: absolute;
    overflow: hidden;
`

const Splashes1 = styled.div`
    position: absolute;
    top: -50%;
    left: 10%;
    bottom: -50%;
    width: 285px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, #128696 100%);
    transform: rotate(44.07deg);
`

const Splashes2 = styled.div`
    position: absolute;
    top: -50%;
    left: 40%;
    bottom: -50%;
    width: 190px;
    background: linear-gradient(180deg, #F67A7C 0%, #28883A 100%);
    transform: rotate(44.07deg);
`

export const Background: React.FC = () => {
    return (
        <Wrapper>
            <Splashes1 />
            <Splashes2 />
        </Wrapper>
    )
}
