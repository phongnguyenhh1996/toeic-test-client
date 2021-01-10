import styled from "styled-components"
import loginSideImg from '../../assets/images/login-side-img.jpg'
import { theme } from "../../utils/theme"

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Inner = styled.div`
  width: 1000px;
  height: 600px;
  background: #FFFFFF;
  box-shadow: 0px 30px 71px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`

export const LeftContent = styled.div`
  background-image: url(${loginSideImg});
  background-size: cover;
  height: 100%;
  display: flex;
`
export const LeftInner = styled.div`
  flex-grow: 1;
  padding-left: 65px;
  padding-top: 65px;
  background-color: rgba(0, 0, 0, 0.3);
`

export const Heading = styled.h1`
  font-weight: 900;
  font-size: 25px;
  color: ${props => props.color};
  strong {
    font-size: 60px;
    line-height: 90px;
  }
`

export const SubHeading = styled.h2`
  font-size: 18px;
  line-height: 35px;
  color: ${props => props.color};
`

export const RightContent = styled.div`
  display: flex;
  height: 100%;
  padding: 60px;
  flex-direction: column;
`

export const RegisterSuggest = styled.div`
  font-size: 16px;
  color: ${theme.textDarkPrimary};
  line-height: 19px;
  a {
    text-decoration: none;
    color: ${theme.textPrimary2};
  }
`
