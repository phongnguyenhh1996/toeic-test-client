import React from "react";
import { SectionStaticsStyled } from "./style";

export interface SectionStaticsProps {
  icon?: () => JSX.Element
  colorArr: string[]
  percent: number
  title?: string
}

export const SectionStatics: React.FC<SectionStaticsProps> = ({icon, colorArr, percent, title}) => {
  return (
    <SectionStaticsStyled colorArr={colorArr} percent={percent}>
      <div className="icon-wrapper">
        {icon && icon()}
      </div>
      <div className="content-wrapper">
        <div className="info">
          <div className="name">{title}</div>
          <div className="percent">{percent}%</div>
        </div>
        <div className="progress-bar"></div>
      </div>
    </SectionStaticsStyled>
  );
};
