import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import LOGO from "../../assets/images/logo.svg"

const LogoImg = styled.img`
  cursor: pointer;
`
interface LoginProps {
  width: string
}

export const Logo: React.FC<LoginProps> = ({ width }) => {

  const history = useHistory()

  const handleClickLogo = () => {
    history.push('/')
  }

  return (
    <>
      <LogoImg onClick={handleClickLogo} width={width} src={LOGO} alt="Logo" />
    </>
  )
}
