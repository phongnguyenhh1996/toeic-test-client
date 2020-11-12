import styled, {keyframes} from "styled-components";
import { CircularProgressProps } from ".";
import { theme } from "../../utils/theme";

const percent = keyframes`
  0% {
    stroke-dashoffset: 374;
	}
`

export const CircularProgressStyle = styled.div<CircularProgressProps>`
  position: relative;
  width: 140px;
  height: 140px;
  svg {
	  width: 140px;
    height: 140px;
    transform: rotate(-90deg);
  }

  circle {
    position: absolute;
    fill: none;
    stroke-width: 8;
    transform: translate(10px, 10px);
    stroke-dasharray: 374;
    stroke-linecap: round;
  }

  circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke-width: 6;
    stroke: ${theme.backgroundDarkSecondary};
  }
  circle:nth-child(2) {
    stroke-dashoffset: calc(374 - (374 * ${(props: CircularProgressProps) => props.percent}) / 100);
    stroke: #F67A7C;
    animation: ${percent} 1.5s ease-in-out;
    animation-delay: 1s;
  }

  .number {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 48px;
  }

  span {
    font-size: 24px;
    opacity: .7;
  }
`
