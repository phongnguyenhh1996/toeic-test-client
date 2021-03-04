import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { get } from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addNewQuestionToGroup, changeQuestionData, goToQuestion, initTest, removeQuestionFromGroup } from '../../actions/tests'
import CustomButton from '../../components/CustomButton'
import { Player } from '../../components/Player'
import { IGroupQuestion } from '../../reducers/tests'
import {
  createTestData,
  getPartInfoFromQuestion,
  Question as IQuestion,
  Answer as IAnswer,
  CorrectAnswer as ICorrectAnswer,
  Test as ITest,
  readFile,
  getFirstQuestion,
  getLastQuestion
} from '../../utils/function'
import { usePrevious } from '../../utils/hooks'
import MapNavigator from './components/Navigator'
import { Question } from './components/Question'
import { TestInfo } from './components/TestInfo'
import { UploadFile } from './components/UploadFile'
import { MainContainer, MediaWrapper, NavigationBtnGroup, PartDescription, RemoveMedia, SideContainer, SideContent, SideInner, UploadWrapper, Wrapper } from './style'

const CreateTest: React.FC = () => {

  const location = useLocation()
  const dispatch = useDispatch()

  const isExam = location.pathname === '/exam'

  let testType = get(location, 'state.testType')
  let testPart = get(location, 'state.testPart')

  const [media, setMedia]: any = useState({ audio: undefined, image: undefined })
  const [open, setOpen] = React.useState(false);


  const currentQuestionNumb = useSelector(state => get(state, `tests.currentQuestion`))
  const currentQuestion = useSelector(state => get(state, `tests.test.questions.${currentQuestionNumb}`, {})) as IQuestion
  const groupQuestion = useSelector(state => get(state, `tests.groupQuestion`)) as IGroupQuestion
  const questionList = useSelector(state => get(state, `tests.test.questions`, {})) as { [key: string]: IQuestion }
  const answerList = useSelector(state => get(state, `tests.test.answers`, {})) as { [key: string]: IAnswer[] }
  const correctAnswerList = useSelector(state => get(state, `tests.test.correctAnswer`, {})) as { [key: string]: ICorrectAnswer }
  const testTypeByTest = useSelector(state => get(state, `tests.test.testType`))
  const testPartByTest = useSelector(state => get(state, `tests.test.testPart`))
  if (isExam) {
    testType = testTypeByTest
    testPart = testPartByTest
  }
  const listQuestionGroup = useMemo(() => {
    if (currentQuestion.questionGroupId) {
      const currentGroupQuestion = groupQuestion[currentQuestion.questionGroupId]
      const listQuestion = currentGroupQuestion.map(questionNum => questionList[questionNum])
      return listQuestion
    } else {
      return [currentQuestion]
    }
  }, [currentQuestion, questionList, groupQuestion]);

  const questionData = listQuestionGroup.map(question => {
    return {
      question: question,
      answers: answerList[question.questionNumb] || {},
      correctAnswer: correctAnswerList[question.questionNumb] || {}
    }
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const audioFile = questionData[0]?.question?.audioSrc
  const imageFile = questionData[0]?.question?.imageSrc
  const prevAudioFile = usePrevious(audioFile)
  const prevImageFile = usePrevious(imageFile)

  useEffect(() => {
    if (isExam) {
      setMedia((media: any) => ({ audio: audioFile, image: imageFile }))
      return
    }
    if (prevAudioFile && !audioFile) {
      setMedia((media: any) => ({ ...media, audio: undefined }))
    }
    if (prevImageFile && !imageFile) {
      setMedia((media: any) => ({ ...media, image: undefined }))
    }
    if (!prevAudioFile && audioFile) {
      readFile(audioFile, (result: any) => setMedia((media: any) => ({ ...media, audio: result })))
    }
    if (!prevImageFile && imageFile) {
      readFile(imageFile, (result: any) => setMedia((media: any) => ({ ...media, image: result })))
    }
  }, [audioFile, imageFile, prevAudioFile, prevImageFile, isExam])

  useEffect(() => {
    if (!isExam) {
      const test = createTestData(testType, testPart)
      dispatch(initTest(test))
    }
    return () => {
      dispatch(initTest({} as ITest))
    }

  }, [testType, testPart, dispatch, isExam])

  const onUploadImage = (questionNumb: number) => (result: any) => {
    dispatch(changeQuestionData(result, 'imageSrc', questionNumb))
  }

  const onUploadAudio = (questionNumb: number) => (result: any) => {
    dispatch(changeQuestionData(result, 'audioSrc', questionNumb))
  }

  const handleRemoveMedia = (key: string, questionNumb: number) => () => {
    dispatch(changeQuestionData(null, key, questionNumb))
  }

  const handleClickQuestion = (item: number) => () => {
    dispatch(goToQuestion(item))
  }

  const handleRemoveQuestionFromGroup = (questionGroupId: number) => () => {
    dispatch(removeQuestionFromGroup(questionGroupId))
  }

  const handleShowBtnAddMoreQuestion = useCallback(() => {

    if (isExam) {
      return null
    }

    const handleAddQuestionToGroup = () => {
      dispatch(addNewQuestionToGroup(questionData[0].question.questionNumb, questionData[0].question.questionGroupId))
    }

    if (questionData.length === 1) {
      if (!questionData[0].question.questionNumb) {
        return null
      }
      const partInfo = getPartInfoFromQuestion(questionData[0].question.questionNumb)
      const lastQuestionPartNumb = partInfo.totalQuestion + partInfo.fromNumb - 1

      const isNextQuestionHaveGroup = !!(groupQuestion[questionData[0].question.questionNumb + 1])
      const isEndOfPart = questionData[0].question.questionNumb === lastQuestionPartNumb

      if (isEndOfPart || isNextQuestionHaveGroup) {
        return null
      }
    }
    if (questionData.length >= 2) {
      const lastGroupNumb = questionData[0].question.questionGroupId as number + questionData.length - 1

      const partInfo = getPartInfoFromQuestion(lastGroupNumb)
      const lastQuestionPartNumb = partInfo.totalQuestion + partInfo.fromNumb - 1

      const isEndOfPart = lastGroupNumb === lastQuestionPartNumb
      const isNextQuestionHaveGroup = !!(groupQuestion[lastGroupNumb + 1])

      if (isEndOfPart || isNextQuestionHaveGroup) {
        return null
      }
    }
    return (
      <CustomButton onClick={handleAddQuestionToGroup} size="large" theme="gray">
        <FaPlus /> Add more question
      </CustomButton>
    )
  }, [dispatch, questionData, groupQuestion, isExam])

  const partInfo = getPartInfoFromQuestion(currentQuestionNumb)

  const isDisableBack = useMemo(() => {
    const firstNumb = getFirstQuestion(testType, testPart)
    if (questionData[0].question.questionNumb === firstNumb) {
      return true
    }
  }, [questionData, testType, testPart])

  const isDisableNext = useMemo(() => {
    const lastNumb = getLastQuestion(testType, testPart)
    const isQuestionHaveGroup = !!questionData[0].question.questionGroupId

    const lastQuestinInGroup = isQuestionHaveGroup && (
      groupQuestion[questionData[0].question.questionGroupId as number].length + questionData[0].question.questionNumb - 1
    )

    if (!isQuestionHaveGroup && questionData[0].question.questionNumb === lastNumb) {
      return true
    }

    if (isQuestionHaveGroup && lastQuestinInGroup === lastNumb) {
      return true
    }

    return false
  }, [questionData, testType, testPart, groupQuestion])

  const handleNavigation = (type: 'next' | 'prev') => () => {
    let questionNumbToGo
    const questionGroupId = questionData[0].question.questionGroupId
    const groupLength = (questionGroupId && groupQuestion[questionGroupId as number].length) || 0
    if (type === 'next') {
      if (!questionGroupId) {
        questionNumbToGo = questionData[0].question.questionNumb + 1
      } else {
        questionNumbToGo = questionData[0].question.questionNumb + groupLength
      }
    }
    if (type === 'prev') {
      questionNumbToGo = questionData[0].question.questionNumb - 1
    }

    questionNumbToGo && dispatch(goToQuestion(questionNumbToGo))
  }

  return (
    <Wrapper>
      <SideContainer>
        <SideInner>
          <SideContent>
            {!isExam && <TestInfo testType={testType} testPart={testPart} />}
            <MapNavigator groupQuestion={groupQuestion} testType={testType} testPart={testPart} />
          </SideContent>
        </SideInner>
      </SideContainer>
      <MainContainer>
        <PartDescription>
          Part {partInfo.partNumb + 1} - {partInfo.description}
        </PartDescription>
        <UploadWrapper isRowDirection={!media.audio && !media.image}>
          {media.audio ?
            <MediaWrapper width="100%">
              <Player src={media.audio} />
              {!isExam &&
                <RemoveMedia onClick={handleRemoveMedia('audioSrc', questionData[0].question.questionNumb)}>
                  <FaTimes />
                </RemoveMedia>
              }
            </MediaWrapper>
            : isExam ? null :
              <UploadFile onLoadedFile={onUploadAudio(questionData[0].question.questionNumb)} type="audio" />
          }
          {media.image ?
            <MediaWrapper width="auto">
              <img style={{ cursor: 'pointer' }} onClick={handleClickOpen} width="100%" src={media.image} alt="Uploaded img" />
              <Dialog
                fullWidth
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
              >
                <DialogContent>
                  <img width="100%" src={media.image} alt="Uploaded img" />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
              {!isExam &&
                <RemoveMedia onClick={handleRemoveMedia('imageSrc', questionData[0].question.questionNumb)}>
                  <FaTimes />
                </RemoveMedia>
              }
            </MediaWrapper>
            : isExam ? null :
              <UploadFile onLoadedFile={onUploadImage(questionData[0].question.questionNumb)} type="image" />}
        </UploadWrapper>
        {questionData.length === 1 &&
          <Question
            question={questionData[0].question}
            answers={questionData[0].answers}
            correctAnswer={questionData[0].correctAnswer}
            isExam={isExam}
          />
        }
        {questionData.length > 1 && questionData.map((question, index: number) => {
          if (index === questionData.length - 1 && !isExam) {
            return (
              <MediaWrapper key={question.question.questionNumb} width="auto">
                <Question
                  currentQuestionNumb={currentQuestionNumb}
                  onClick={handleClickQuestion(question.question.questionNumb)}
                  question={question.question}
                  answers={question.answers}
                  correctAnswer={question.correctAnswer}
                />
                <RemoveMedia onClick={handleRemoveQuestionFromGroup(question.question.questionGroupId as number)}>
                  <FaTimes />
                </RemoveMedia>
              </MediaWrapper>
            )
          }
          return (
            <Question
              isExam={isExam}
              currentQuestionNumb={currentQuestionNumb}
              onClick={handleClickQuestion(question.question.questionNumb)}
              key={question.question.questionNumb}
              question={question.question}
              answers={question.answers}
              correctAnswer={question.correctAnswer}
            />
          )
        })}
        {handleShowBtnAddMoreQuestion()}
        <NavigationBtnGroup>
          <CustomButton onClick={handleNavigation('prev')} disabled={isDisableBack} theme="nav-button">
            BACK
          </CustomButton>
          <CustomButton onClick={handleNavigation('next')} disabled={isDisableNext} theme="nav-button">
            NEXT
          </CustomButton>
        </NavigationBtnGroup>
      </MainContainer>
    </Wrapper>
  )
}

export default CreateTest

