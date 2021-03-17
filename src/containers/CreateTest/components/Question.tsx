import Checkbox from "@material-ui/core/Checkbox";
import React, { useEffect } from "react";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  changeAnswerData,
  changeCorrectAnswerData,
  changeQuestionData,
} from "../../../actions/tests";
import {
  Question as IQuestion,
  Answer as IAnswer,
  CorrectAnswer as ICorrectAnswer,
} from "../../../utils/function";
import { theme } from "../../../utils/theme";
import { Input } from "./TestInfo";
import { ALPHABEL_ANSWER } from "../../../constants";
import QuestionSectionLink from "./QuestionSectionLink";
import { scroller, animateScroll as scroll } from "react-scroll";

const Header = styled.div`
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  color: #fff;
  background: ${theme.textPrimary2};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;

const HeaderMenuIcon = styled(FaEllipsisV)`
  margin-left: auto;
  font-size: 18px;
`;

const Content = styled.div`
  padding: 20px;
`;

const QuestionExam = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 30px;
  color: ${theme.textDarkPrimary};
  line-height: 25px;
`;

const AnswerExam: any = styled.div`
  padding: 12.5px 14px;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.textDarkPrimary};
  flex-grow: 1;
  border-radius: 10px;
  border: 1px solid
    ${(props: any) =>
      props.$active
        ? theme.backgroundSecondary
        : theme.backgroundDarkSecondary};
  background-color: ${(props: any) =>
    props.$active ? theme.backgroundPaginationBtn : "transparent"};
  transition: background-color 0.2s ease, border-color 0.2s ease;
`;

const AnswerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: -10px;
  margin-top: 10px;
`;

const CheckboxPrimary = styled(Checkbox)`
  &.Mui-checked {
    color: ${theme.textPrimary2};
  }
`;

interface ExplanationHeadingProps {
  text: string;
}

export const ExplanationHeading = styled.div<ExplanationHeadingProps>`
    height: 30px;
    position: relative;
    margin-bottom: 15px;
    ::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        transform: translateY(-50%);
        background-color: ${theme.textDarkSecondary};
    }
    ::after {
        position: absolute;
        content: "${(props) => props.text}";
        top: 50%;
        transform: translateY(-50%);
        left: 30px;
        background-color: #fff;
        padding: 0 10px;
        color: ${theme.textDark2};
    }
`;
interface QuestionProps {
  isExam?: boolean;
  question: IQuestion;
  answers: IAnswer[];
  correctAnswer: ICorrectAnswer;
  onClick?: () => void;
  currentQuestionNumb?: number;
  disabled: boolean;
}

export const Question: React.FC<QuestionProps> = ({
  isExam = false,
  question,
  answers,
  correctAnswer,
  onClick,
  currentQuestionNumb,
  disabled,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentQuestionNumb && currentQuestionNumb === question.questionNumb) {
      if (question.questionNumb === question.questionGroupId) {
        scroll.scrollToTop({
          duration: 700,
          delay: 0,
          smooth: true,
        });
      } else {
        scroller.scrollTo(`question-${currentQuestionNumb}`, {
          duration: 700,
          delay: 0,
          smooth: true,
          offset: -60,
        });
      }
    }
  }, [currentQuestionNumb, question.questionNumb, question.questionGroupId]);

  const onChange = (type: string, answerNumb?: number) => (e: any) => {
    switch (type) {
      case "question":
        dispatch(
          changeQuestionData(
            e.target.value,
            e.target.name,
            question.questionNumb
          )
        );
        break;
      case "answer":
        dispatch(
          changeAnswerData(
            e.target.value,
            parseInt(e.target.name),
            question.questionNumb
          )
        );
        break;
      case "correctAnswer":
        dispatch(
          changeCorrectAnswerData(
            e.target.name === "answerNumb" ? answerNumb : e.target.value,
            e.target.name,
            question.questionNumb
          )
        );
        break;
      default:
        return;
    }
  };

  return (
    <QuestionSectionLink
      name={`question-${question.questionNumb}`}
      onClick={onClick}
    >
      <Header>
        <HeaderTitle>Question {question.questionNumb}</HeaderTitle>
        <HeaderMenuIcon />
      </Header>
      {isExam && (
        <Content>
          <QuestionExam>{question.question}</QuestionExam>

          {Object.values(answers).map((answer) => (
            <AnswerWrapper key={answer.answerNumb}>
              <CheckboxPrimary
                checked={correctAnswer.answerNumb === answer.answerNumb}
                onChange={onChange("correctAnswer", answer.answerNumb)}
                name="answerNumb"
                color="default"
                icon={<FaCheckCircle />}
                checkedIcon={<FaCheckCircle />}
              />
              <AnswerExam
                $active={correctAnswer.answerNumb === answer.answerNumb}
              >
                {ALPHABEL_ANSWER[answer.answerNumb]}. {answer.answer}
              </AnswerExam>
            </AnswerWrapper>
          ))}
        </Content>
      )}
      {!isExam && (
        <Content>
          {!disabled && (
            <Input
              InputLabelProps={{ shrink: true }}
              onChange={onChange("question")}
              value={question.question}
              name="question"
              size="small"
              id="outlined-basic"
              multiline
              fullWidth
              rows={3}
              label="Question"
              variant="outlined"
              placeholder="Write your question here"
            />
          )}

          {Object.values(answers).map((answer) => (
            <AnswerWrapper key={answer.answerNumb}>
              <CheckboxPrimary
                checked={correctAnswer.answerNumb === answer.answerNumb}
                onChange={onChange("correctAnswer", answer.answerNumb)}
                name="answerNumb"
                color="default"
                icon={<FaCheckCircle />}
                checkedIcon={<FaCheckCircle />}
              />
              <Input
                InputLabelProps={{ shrink: true }}
                onChange={onChange("answer")}
                name={(answer.answerNumb - 1).toString()}
                value={answer.answer}
                size="small"
                id="outlined-basic"
                multiline
                fullWidth
                rowsMax={3}
                label={`Answer ${ALPHABEL_ANSWER[answer.answerNumb]}`}
                variant="outlined"
                placeholder={
                  disabled
                    ? ALPHABEL_ANSWER[answer.answerNumb]
                    : "Write your answer here"
                }
                disabled={disabled}
              />
            </AnswerWrapper>
          ))}
          <ExplanationHeading text="Answer explanation (optional)" />
          <Input
            name="explanation"
            onChange={onChange("correctAnswer")}
            value={correctAnswer.explanation || ""}
            bg="#E4E4E4"
            size="small"
            id="outlined-basic"
            multiline
            fullWidth
            rows={3}
            variant="outlined"
            placeholder="Add explanation for the correct answer."
          />
        </Content>
      )}
    </QuestionSectionLink>
  );
};
