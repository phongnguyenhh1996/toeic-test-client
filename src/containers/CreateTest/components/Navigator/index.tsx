import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { get, range } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { scroller } from "react-scroll";

import { goToQuestion, importPartRequest } from "../../../../actions/tests";
import { TEST_TYPE, TEST_TYPE_INFO } from "../../../../constants";
import {
  getFirstQuestion,
  getPartInfoFromQuestion,
  Question as IQuestion,
  Test,
} from "../../../../utils/function";
import { theme } from "../../../../utils/theme";
import { Wrapper } from "../TestInfo";
import { usePrevious } from "../../../../utils/hooks";
import QuestionContainer from "./QuestionContainer";
import QuestionItemLink from "./QuestionItemLink";
import { IGroupQuestion } from "../../../../reducers/tests";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CustomButton from "../../../../components/CustomButton";
import { fetchListCreatedTest } from "../../../../services/listTest";
import { GridListTest } from "../../../ListTest/style";
import Grid from "@material-ui/core/Grid";
import { TestItem } from "../../../Dashboard/components/TestItem";

const ButtonPrimary: any = styled(Button)`
  font-size: 11px;
  color: ${theme.textDarkPrimary};
  &.MuiButton-contained {
    background-color: ${theme.textPrimary2};
    color: ${theme.textLight};
  }
`;

const PartGroup = styled(ButtonGroup)`
  margin-bottom: 15px;
`;
interface IQuestionStyled {
  $isGroupQuestion: boolean;
}

const Question = styled(Button)<IQuestionStyled>`
  color: ${theme.textDarkPrimary};
  min-width: 30px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  background-color: ${(props) =>
    props.$isGroupQuestion ? theme.backgroundPaginationBtn : "initial"};
  .MuiTouchRipple-root {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  &.MuiButton-contained {
    background-color: ${theme.textPrimary2};
    color: ${theme.textLight};
  }
  margin-bottom: 10px;
  font-size: 12px;
`;

const initialState = {
  mouseX: null,
  mouseY: null,
};
interface NavigationProps {
  testType: number;
  testPart: number;
  groupQuestion: IGroupQuestion;
}

const MapNavigator: React.FC<NavigationProps> = ({
  testType,
  testPart,
  groupQuestion,
}) => {
  const dispatcher = useDispatch();
  const currentQuestionNumb = useSelector((state) =>
    get(state, `tests.currentQuestion`)
  );
  const currentQuestion = useSelector((state) =>
    get(state, `tests.test.questions.${currentQuestionNumb}`, {})
  ) as IQuestion;
  const prevCurrentQuestion = usePrevious(currentQuestionNumb);
  const currentGroupQuestion =
    groupQuestion[currentQuestion.questionGroupId as number];

  const [state, setState] = useState<{
    mouseX: null | number;
    mouseY: null | number;
  }>(initialState);

  const [open, setOpen] = useState(false);
  const [selectedPart, setSelectedPart] = useState(0);
  const [listTest, setListTest]: any = useState({});

  const fetchListTest = (part: any) => {
    if (!listTest[part]) {
      fetchListCreatedTest(1, part).then((res) => {
        if (res.status === 200) {
          setListTest((prev: any) => ({ ...prev, [part]: res.data?.tests }));
        }
      });
    }
  };

  const handleContext = (part: any) => (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setSelectedPart(part);
    fetchListTest(part);
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
    handleClickOpenDialog();
  };

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (currentQuestionNumb !== prevCurrentQuestion) {
      scroller.scrollTo(currentQuestionNumb.toString(), {
        duration: 500,
        delay: 0,
        smooth: true,
        containerId: "containerElement",
      });
    }
  }, [currentQuestionNumb, prevCurrentQuestion]);

  const handleClickQuestion = (item: number) => () => {
    dispatcher(goToQuestion(item));
  };

  const goToPart = (partNumb: number) => () => {
    const questionToGo = getFirstQuestion(TEST_TYPE.PART, partNumb);
    dispatcher(goToQuestion(questionToGo));
  };

  const handleImportTest = (test: Test) => {
    dispatcher(importPartRequest(test.id || ''))
    handleCloseDialog()
  }

  const renderPartNav = () => {
    const partInfo = getPartInfoFromQuestion(currentQuestionNumb) || {};

    if (testType === TEST_TYPE.PART) {
      const title = `Part ${testPart + 1}`;

      return (
        <PartGroup aria-label="outlined button group">
          <ButtonPrimary
            onContextMenu={handleContext(testPart)}
            variant="contained"
          >
            {title}
          </ButtonPrimary>
        </PartGroup>
      );
    } else {
      return (
        <>
          {(testType === TEST_TYPE.FULL ||
            testType === TEST_TYPE.LISTENING) && (
            <PartGroup aria-label="outlined button group">
              {range(1, 5).map((numb) => {
                return (
                  <ButtonPrimary
                    onContextMenu={handleContext(numb - 1)}
                    onClick={goToPart(numb - 1)}
                    variant={
                      partInfo.partNumb === numb - 1 ? "contained" : "outlined"
                    }
                    key={numb}
                  >
                    Part {numb}
                  </ButtonPrimary>
                );
              })}
            </PartGroup>
          )}
          {(testType === TEST_TYPE.FULL || testType === TEST_TYPE.READING) && (
            <PartGroup aria-label="outlined button group">
              {range(5, 8).map((numb) => {
                return (
                  <ButtonPrimary
                    onClick={goToPart(numb - 1)}
                    onContextMenu={handleContext(numb - 1)}
                    variant={
                      partInfo.partNumb === numb - 1 ? "contained" : "outlined"
                    }
                    key={numb}
                  >
                    Part {numb}
                  </ButtonPrimary>
                );
              })}
            </PartGroup>
          )}
        </>
      );
    }
  };

  const isTestPart = testType === TEST_TYPE.PART;
  const startQuestion = isTestPart
    ? get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}.fromNumb`)
    : get(TEST_TYPE_INFO, `${testType}.fromNumb`);
  const endQuestion = isTestPart
    ? startQuestion +
      get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}.totalQuestion`)
    : startQuestion + get(TEST_TYPE_INFO, `${testType}.totalQuestion`);
  return (
    <Wrapper>
      {renderPartNav()}
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Import</MenuItem>
      </Menu>
      <QuestionContainer
        name="containerElement"
        id="containerElement"
        container
        spacing={0}
      >
        {range(startQuestion, endQuestion).map((item) => (
          <QuestionItemLink name={item.toString()} key={item} item xs={2}>
            <Question
              $isGroupQuestion={
                currentGroupQuestion && currentGroupQuestion.includes(item)
              }
              onClick={handleClickQuestion(item)}
              variant={item === currentQuestionNumb ? "contained" : "outlined"}
            >
              {item}
            </Question>
          </QuestionItemLink>
        ))}
      </QuestionContainer>
      <Dialog
        maxWidth="lg"
        fullWidth
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Import part ${
          selectedPart + 1
        } questions`}</DialogTitle>
        <DialogContent>
          <GridListTest item xs={12}>
            <Grid container spacing={2}>
              {listTest[selectedPart]?.length > 0 &&
                listTest[selectedPart]?.map(
                  (test: any, index: number) => (
                    <Grid item xs={3} key={index}>
                      <TestItem test={test} changeIsOpenDialog={handleImportTest}/>
                    </Grid>
                  )
                )}
            </Grid>
          </GridListTest>
        </DialogContent>
        <DialogActions>
          <CustomButton
            onClick={handleCloseDialog}
            theme="green-solid-no-shadow"
          >
            CANCEL
          </CustomButton>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default MapNavigator;
