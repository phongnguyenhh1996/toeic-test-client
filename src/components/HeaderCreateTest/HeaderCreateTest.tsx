import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Header,
  ButtonWrapper
} from "./Header.styled";
import CustomButton from "../CustomButton";
import { Logo } from "../Logo";
import { LogoWrapper } from "../HeaderDashboard/Header.styled";

interface Props { }

export default function HeaderCreateTest(props: Props) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <LogoWrapper>
          <Logo width="145px"/>
        </LogoWrapper>
        <ButtonWrapper>
          <CustomButton theme="green-solid-no-shadow">
            EXIT
          </CustomButton>
          <CustomButton theme="white">
            DONE
          </CustomButton>
        </ButtonWrapper>
      </Header>
    </React.Fragment>
  );
}
