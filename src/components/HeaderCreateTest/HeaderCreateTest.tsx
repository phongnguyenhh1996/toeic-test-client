import React, { useState } from "react";
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
import { useSnackbar } from "notistack";

interface Props { }

export default function HeaderCreateTest(props: Props) {

  const history = useHistory()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)

  const handleExit = () => {
    history.goBack()
  }

  const handleSubmitTest = () => {
    setIsLoading(true)
    dispatch(createTestRequest({
      onSuccess: () => {
        enqueueSnackbar('Test created successfully!',{
          anchorOrigin:{
            vertical:'top',
            horizontal:'right'
          },variant:'success'
        });
        setIsLoading(false)
        history.push('/list-test?type=1&page=1')
      }
    }))
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <LogoWrapper>
          <Logo width="145px"/>
        </LogoWrapper>
        <ButtonWrapper>
          <CustomButton disabled={isLoading} onClick={handleExit} theme="green-solid-no-shadow">
            EXIT
          </CustomButton>
          <CustomButton $isLoading={isLoading} disabled={isLoading} onClick={handleSubmitTest} theme="white">
            DONE
          </CustomButton>
        </ButtonWrapper>
      </Header>
    </React.Fragment>
  );
}
