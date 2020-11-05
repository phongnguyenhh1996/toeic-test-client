import React from 'react'
import LOGO from "../../assets/images/TOEIC_ICON.svg"
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = () => {
    return (
        <LogoWrapper>
          <img width={120} height={100} src={LOGO} alt="Logo" />
        </LogoWrapper>
    )
}
