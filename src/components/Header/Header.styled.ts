import AppBar from '@material-ui/core/AppBar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField/TextField';
import { theme } from '../../utils/theme';

const Header = styled.div`
  background-color: #fff;
`;

const Header__Brand = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 0;
  display: block;
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

const Header__navigation = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`

const Header__navigationItem = styled.li`
  margin-left: 20px;
  font-weight: bold;
  a {
    text-decoration: none !important;
    color: ${theme.textPrimary} !important;
    text-transform: uppercase;
  }
`

export const Styled = {
  Header,
  Header__Brand,
  Header__Input,
  Header__Form,
  Header__navigation,
  Header__navigationItem
}
