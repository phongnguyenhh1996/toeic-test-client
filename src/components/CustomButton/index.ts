import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import { theme } from "../../utils/theme";

const themeBtn: any = {
  'blue': {
    bg1: "#2770C7",
    bg2: "#3499DA",
    shadow: "rgba(50, 145, 217, 0.5)"
  },
  'pink': {
    bg1: "#F66469",
    bg2: "#F7864B",
    shadow: "rgba(247, 134, 75, 0.5)"
  },
  'green': {
    bg1: "#1D976C",
    bg2: "#6CC57C",
    shadow: "rgba(108, 197, 124, 0.5)"
  },
}

const CustomButton = styled(Button)`
  border-radius: 5px;
  text-transform: none;
  color: ${theme.textLight};
  font-size: 13px;
  ${props => css`
    background: linear-gradient(90deg, ${themeBtn[props.theme].bg1} 0%, ${themeBtn[props.theme].bg2} 100%);
    box-shadow: 0px 4px 10px ${themeBtn[props.theme].shadow};
  `}
`

export default CustomButton
