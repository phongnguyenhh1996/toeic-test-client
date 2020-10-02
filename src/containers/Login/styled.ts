import styled, { css } from "styled-components"
interface SideProps {
  right?: boolean
}

const Login = styled.div`
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Login__Inner = styled.div`
  max-width: 1100px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  display: flex;
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
`

const Login__Side = styled.div<SideProps>`
  flex: 0 0 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => !props.right && css`
    padding: 40px;
  `}
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`
const Login__Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Login__Right = styled.div`
`

export const Styled = {
  Login,
  Login__Inner,
  Login__Side,
  Login__Right,
  Login__Form
}
