import React from 'react'
import LOGO from "../../assets/images/logo.svg"

interface LoginProps {
  width: string
}

export const Logo : React.FC<LoginProps> = ({width}) => {
    return (
        <>
          <img width={width} src={LOGO} alt="Logo" />
        </>
    )
}
