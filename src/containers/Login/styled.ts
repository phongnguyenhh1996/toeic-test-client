import styled from "styled-components"
interface SideProps {
  right?: boolean
}

const Login = styled.div`
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const Login__Inner = styled.div`
  max-width: 1100px;
  background-color: #fff;
  display: flex;
  flex: 1;
  overflow: hidden;
`

const Login__Side = styled.div<SideProps>`
  flex: 0 0 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
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
