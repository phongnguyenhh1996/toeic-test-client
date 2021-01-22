import React from 'react'
import { FaMicrophone, FaRegImage } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'

const Wrapper = styled.label`
    cursor: pointer;
    position: relative;
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

const FileInput = styled.input`
    position: absolute;
    display: none;
`

interface Props {
    type: "image" | "audio";
    onLoadedFile: (arg0: any) => void
}

export const UploadFile : React.FC<Props> = ({ type, onLoadedFile }) => {


    const onUploadImage = (e: any) => {
        const file = e.target.files[0];
        onLoadedFile(file)
    }

    const renderContent = (type: string) => {
        switch (type) {
            case 'audio':
                return (
                        <>
                            <FaMicrophone />
                            Audio
                            <FileInput
                                onChange={onUploadImage}
                                name="audioFile"
                                type="file"
                                accept=".mp3,audio/*"
                            />
                        </>
                    )
            case 'image':
                return  (
                    <>
                        <FaRegImage />
                        Image
                        <FileInput
                            onChange={onUploadImage}
                            name="imageFile"
                            type="file"
                            accept="image/*"
                        />
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
