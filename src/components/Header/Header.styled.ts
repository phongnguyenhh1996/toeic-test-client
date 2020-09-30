import AppBar from '@material-ui/core/AppBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField/TextField';

const Header = styled(AppBar)`
  background-color: #4267B2;
`;

const Header__Brand = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Header__Form = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > * {
    margin-left: 10px;
  }
`

const Header__Input = styled(TextField)`
  color: #fff;

  input, label {
    color: #fff !important;
  }
  fieldset {
    border-color: #fff !important;
  }
`

export const Styled = {
  Header,
  Header__Brand,
  Header__Input,
  Header__Form
}
