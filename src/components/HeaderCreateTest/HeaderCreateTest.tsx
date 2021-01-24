import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Header,
  ButtonWrapper
} from "./Header.styled";
import CustomButton from "../CustomButton";
import { Logo } from "../Logo";
import { LogoWrapper } from "../HeaderDashboard/Header.styled";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTestRequest } from "../../actions/tests";

interface Props { }

export default function HeaderCreateTest(props: Props) {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleExit = () => {
    history.goBack()
  }

  const handleSubmitTest = () => {
    dispatch(createTestRequest())
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <LogoWrapper>
          <Logo width="145px"/>
        </LogoWrapper>
        <ButtonWrapper>
          <CustomButton onClick={handleExit} theme="green-solid-no-shadow">
            EXIT
          </CustomButton>
          <CustomButton onClick={handleSubmitTest} theme="white">
            DONE
          </CustomButton>
        </ButtonWrapper>
      </Header>
    </React.Fragment>
  );
}
