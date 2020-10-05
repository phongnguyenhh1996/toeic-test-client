import React from 'react'
import LOGO from "../../assets/images/TOEIC_ICON.svg"
import TOEIC from "../../assets/images/toeic.svg"
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = () => {
    return (
        <LogoWrapper>
          <img width={180} height={100} src={LOGO} alt="Logo" />
          <img width={100} height={30} src={TOEIC} alt="Logo Toeic" />
        </LogoWrapper>
    )
}
