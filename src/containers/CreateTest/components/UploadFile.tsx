import React from 'react'
import { FaMicrophone, FaRegImage } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'

const Wrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.textDarkPrimary};
    background-color: ${theme.backgroundGray};
    font-size: 14px;
    svg {
        font-size: 24px;
        margin-bottom: 5px;
    }
`

interface Props {
    type: "image" | "audio";
}

export const UploadFile : React.FC<Props> = ({ type }) => {

    const renderContent = (type: string) => {
        switch (type) {
            case 'audio':
                return (
                    <>
                        <FaMicrophone />
                        Audio
                    </>
                )
            case 'image':
                return (
                    <>
                        <FaRegImage />
                        Image
                    </>
                )
        }
    }

    return (
        <Wrapper>
            {renderContent(type)}
        </Wrapper>
    )
}
