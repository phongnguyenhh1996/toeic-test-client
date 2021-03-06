import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { theme } from "../../utils/theme";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";

export const Header = styled(AppBar)`
  --primary: ${theme.backgroundPrimary};
  --secondary: ${theme.backgroundSecondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  height: 50px;
`

export const LogoWrapper = styled.div`
  margin-left: 20px;
  margin-right: 25px;
`

export const Search = styled.div`
  position: relative;
  background: ${theme.backgroundSecondary};
  max-width: 350px;
  flex-grow: 1;
  border-radius: 5px;
  .input-search {
    color: ${theme.textSecondarySuperLight};
    font-size: 13px;
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${theme.textSecondarySuperLight};
    }
    padding: 8px;
  }
  .icon-search {
    position: absolute;
    right: 8px;
    top: 8px;
    pointer-events: none;
  }
`

export const CreateButton = styled(Button)`
  display: flex;
  align-items: center;
  border: none;
  margin-left: auto;
  background-color: ${theme.backgroundPrimary};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin-right: 25px;
  border-radius: 2px;
  text-transform: none;
  .create-icon {
    font-size: 11px;
    margin-right: 7px;
  }
`

export const HambergerButton = styled(Button)`
  background: ${theme.backgroundPrimary};
  max-width: 30px;
  max-height: 30px;
  min-width: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  color: ${theme.textLight};
  margin-right: 20px;
`

export const LinkNav = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-transform: none;
  padding: 12px;
  svg {
    margin-right: 4px;
    font-size: 18px;
  }
`
export const NavTabs = styled(Tabs)`
  margin-left: 10px;
  .MuiButtonBase-root {
    min-width: 0;
    padding: 0;
    .MuiTab-wrapper {
      display: flex;
      align-items: stretch;
    }
  }
  .MuiTabs-indicator {
    background-color: #fff;
  }
  .MuiTab-textColorInherit{
    opacity: 1;
  }
`