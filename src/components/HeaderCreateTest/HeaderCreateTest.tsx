import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header, ButtonWrapper } from "./Header.styled";
import CustomButton from "../CustomButton";
import { Logo } from "../Logo";
import { LogoWrapper } from "../HeaderDashboard/Header.styled";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTestRequest, postResultRequest } from "../../actions/tests";
import { useSnackbar } from "notistack";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { SectionStatics } from "../../containers/Dashboard/components/SectionStatics";
import styled from "styled-components";

const UploadingWrapper = styled.div`
  min-width: 350px;
  padding: 20px 0;
  font-family: 'roboto' !important;
`

interface Props {}

export default function HeaderCreateTest(props: Props) {
  const history = useHistory();
  const isExam = history.location.pathname === "/exam";
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const uploadProgress = useSelector((state: any) => state.app.uploadProgress);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExit = () => {
    history.goBack();
  };

  const handleSubmitTest = () => {
    setIsLoading(true);
    if (!isExam) {
      handleClickOpen();
      dispatch(
        createTestRequest({
          onSuccess: () => {
            enqueueSnackbar("Test created successfully!", {
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
              variant: "success",
            });
            setIsLoading(false);
            handleClose();
            history.push("/list-test?type=1&page=1");
          },
          onFailure: (err: string) => {
            enqueueSnackbar(err, {
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
              variant: "error",
            });
            setIsLoading(false);
            handleClose();
          }
        })
      );
    } else {
      dispatch(postResultRequest())
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <LogoWrapper>
          <Logo width="145px" />
        </LogoWrapper>
        <ButtonWrapper>
          <CustomButton
            disabled={isLoading}
            onClick={handleExit}
            theme="green-solid-no-shadow"
          >
            EXIT
          </CustomButton>
          <CustomButton
            $isLoading={isLoading}
            disabled={isLoading}
            onClick={handleSubmitTest}
            theme="white"
          >
            DONE
          </CustomButton>
        </ButtonWrapper>
        <Dialog
          open={open}
          disableBackdropClick
          disableEscapeKeyDown
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Uploading..."}</DialogTitle>
          {uploadProgress.total > 0 && 
            <DialogContent>
              <UploadingWrapper>
                <SectionStatics
                  colorArr={["#F67A7C", "#F8A880", "247, 134, 75, 0.5"]}
                  title={`${uploadProgress.done}/${uploadProgress.total} files`}
                  percent={Math.floor(uploadProgress.done/uploadProgress.total * 100)}
                />
                <SectionStatics
                  colorArr={["#2770C7", "#3499DA", "50, 145, 217, 0.5"]}
                  title={uploadProgress.fileName}
                  percent={uploadProgress.progress}
                />
              </UploadingWrapper>
            </DialogContent>
          }
        </Dialog>
      </Header>
    </React.Fragment>
  );
}
