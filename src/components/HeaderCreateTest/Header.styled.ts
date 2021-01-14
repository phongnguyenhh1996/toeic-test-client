import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { theme } from "../../utils/theme";

export const Header = styled(AppBar)`
  --primary: ${theme.backgroundPrimary};
  --secondary: ${theme.backgroundSecondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  height: 50px;
`

export const ButtonWrapper = styled.div`
  & > * {
    margin-right: 20px;
  }
`
