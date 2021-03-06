import styled, { css, keyframes } from "styled-components/macro";
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
  'green-solid-no-shadow': {
    bg1: "#1D976C",
    bg2: "#1D976C",
    shadow: "rgba(108, 197, 124, 0.0)"
  },
  'purple': {
    bg1: "#8854C0",
    bg2: "#8854C0",
    shadow: "rgba(108, 197, 124, 0.0)"
  },
  "white": {
    bg1: "#fff",
    bg2: "#fff",
    shadow: "rgba(0, 0, 0, 0.25)",
    shadowProperty: "0px 2px 4px",
    text: "#1D976C"
  },
  "facebook":{
    bg1: "#1D5096",
    bg2: "#1D5096",
    shadow: "rgba(0, 0, 0, 0.0)",
    shadowProperty: "0px 0px 0px",
    text: "#fff"
  },
  "twitter":{
    bg1: "#1DA0F0",
    bg2: "#1DA0F0",
    shadow: "rgba(0, 0, 0, 0.0)",
    shadowProperty: "0px 0px 0px",
    text: "#fff"
  },
  "google":{
    bg1: "#DB5043",
    bg2: "#DB5043",
    shadow: "rgba(0, 0, 0, 0.0)",
    shadowProperty: "0px 0px 0px",
    text: "#fff"
  },
  "gray": {
    bg1: theme.backgroundGray,
    bg2: theme.backgroundGray,
    shadow: "rgba(0, 0, 0, 0)",
    text: theme.textDarkPrimary
  },
  "nav-button": {
    bg1: "#fff",
    bg2: "#fff",
    shadow: "rgba(0, 0, 0, 0.10)",
    shadowProperty: "0px 2px 2px",
    text: theme.textDarkPrimary
  },
  
}

interface BtnProps {
  $borderCircle?: boolean
  $isLoading?: boolean
}

const loadAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const CustomButton = styled(Button)<BtnProps>`
  position: relative;
  border-radius: ${props => props.$borderCircle ? "40px" : "5px"};
  text-transform: none;
  font-size: 13px;
  padding-left: 30px;
  padding-right: 30px;
  ${props => css`
    background: linear-gradient(90deg, ${themeBtn[props.theme].bg1} 0%, ${themeBtn[props.theme].bg2} 100%);
    box-shadow: ${themeBtn[props.theme].shadowProperty || "0px 4px 10px"} ${themeBtn[props.theme].shadow};
    color: ${themeBtn[props.theme].text || theme.textLight};
  `}
  svg {
    margin-right: 5px;
  }
  &:before {
    ${props => props.$isLoading && css`
      content: '';
      flex-shrink: 0;
      height: 15px;
      width: 15px;
      display: inline-block;
      border-radius: 50%;
      ${props => css`
        border: 3px solid ${themeBtn[props.theme].shadow};
        border-top-color: ${themeBtn[props.theme].text || theme.textLight};
      `}
      margin-right: 5px;
      animation: ${loadAnimation} 1s infinite ease-in-out;
    `}
  }
`

export default CustomButton
