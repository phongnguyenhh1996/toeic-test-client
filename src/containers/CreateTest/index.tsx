import { get } from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addNewQuestionToGroup, changeQuestionData, goToQuestion, initTest, removeQuestionFromGroup } from '../../actions/tests'
import CustomButton from '../../components/CustomButton'
import { Player } from '../../components/Player'
import { IGroupQuestion } from '../../reducers/tests'
import { createTestData,
  getPartInfoFromQuestion,
  Question as IQuestion,
  Answer as IAnswer,
  CorrectAnswer as ICorrectAnswer
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

  const testType = get(location, 'state.testType')
  const testPart = get(location, 'state.testPart')

  const [media, setMedia] = useState({ audio: undefined, image: undefined })


  const currentQuestionNumb = useSelector(state => get(state, `tests.currentQuestion`))
  const currentQuestion = useSelector(state => get(state, `tests.test.questions.${currentQuestionNumb}`, {})) as IQuestion
  const groupQuestion = useSelector(state => get(state, `tests.groupQuestion`)) as IGroupQuestion
  const questionList = useSelector(state => get(state, `tests.test.questions`, {})) as {[key: string]: IQuestion}
  const answerList = useSelector(state => get(state, `tests.test.answers`, {})) as {[key: string]: IAnswer[]}
  const correctAnswerList = useSelector(state => get(state, `tests.test.correctAnswer`, {})) as {[key: string]: ICorrectAnswer}

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

  const audioFile = questionData[0]?.question?.audioSrc
  const imageFile = questionData[0]?.question?.imageSrc
  const prevAudioFile = usePrevious(audioFile)
  const prevImageFile = usePrevious(imageFile)

  const readFile = (file: any, callback: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      callback([reader.result])
    }
  }

  useEffect(() => {
    if (prevAudioFile && !audioFile) {
      setMedia(media => ({...media, audio: undefined}))
    }
    if (prevImageFile && !imageFile) {
      setMedia(media => ({...media, image: undefined}))
    }
    if (!prevAudioFile && audioFile) {
      readFile(audioFile, (result: any) => setMedia(media => ({...media, audio: result})))
    }
    if (!prevImageFile && imageFile) {
      readFile(imageFile, (result: any) => setMedia(media => ({...media, image: result})))
    }
  }, [audioFile, imageFile, prevAudioFile, prevImageFile])

  useEffect(() => {
    const test = createTestData(testType, testPart)
    dispatch(initTest(test))

  }, [testType, testPart, dispatch])

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

    const handleAddQuestionToGroup = () => {
      dispatch(addNewQuestionToGroup(questionData[0].question.questionNumb, questionData[0].question.questionGroupId))
    }

    if (questionData.length === 1) {
      if (!questionData[0].question.questionNumb){
        return null
      }
      const partInfo = getPartInfoFromQuestion(questionData[0].question.questionNumb)

      const lastQuestionNumb = partInfo.totalQuestion + partInfo.fromNumb - 1
      if (questionData[0].question.questionNumb === lastQuestionNumb) {
        return null
      }
    }
    if (questionData.length >= 2) {
      const numbCheck = questionData[0].question.questionGroupId as number + questionData.length - 1

      const partInfo = getPartInfoFromQuestion(numbCheck)
      const lastQuestionNumb = partInfo.totalQuestion + partInfo.fromNumb - 1
      if (numbCheck === lastQuestionNumb) {
        return null
      }
    }
    return (
      <CustomButton onClick={handleAddQuestionToGroup} size="large" theme="gray">
        <FaPlus /> Add more question
      </CustomButton>
    )
  }, [dispatch, questionData])

  const partInfo = getPartInfoFromQuestion(currentQuestionNumb)

  return (
    <Wrapper>
      <SideContainer>
        <SideInner>
          <SideContent>
            <TestInfo testType={testType} testPart={testPart}/>
            <MapNavigator groupQuestion={groupQuestion} testType={testType} testPart={testPart}/>
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
              <Player src={media.audio}/>
              <RemoveMedia onClick={handleRemoveMedia('audioSrc', questionData[0].question.questionNumb)}>
                <FaTimes />
              </RemoveMedia >
            </MediaWrapper>
            : <UploadFile onLoadedFile={onUploadAudio(questionData[0].question.questionNumb)} type="audio" />
          }
          {media.image ?
            <MediaWrapper width="auto">
              <img width="355px" src={media.image} alt="Uploaded img" />
              <RemoveMedia onClick={handleRemoveMedia('imageSrc', questionData[0].question.questionNumb)}>
                <FaTimes />
              </RemoveMedia>
            </MediaWrapper>
            : <UploadFile onLoadedFile={onUploadImage(questionData[0].question.questionNumb)} type="image" />}
        </UploadWrapper>
        {questionData.length === 1 &&
          <Question
            question={questionData[0].question}
            answers={questionData[0].answers}
            correctAnswer={questionData[0].correctAnswer}
          />
        }
        {questionData.length > 1 && questionData.map((question, index: number) => {
          if (index === questionData.length - 1) {
            return (
              <MediaWrapper key={question.question.questionNumb} width="auto">
                <Question
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
          <CustomButton theme="nav-button">
            BACK
          </CustomButton>
          <CustomButton theme="nav-button">
            NEXT
          </CustomButton>
        </NavigationBtnGroup>
      </MainContainer>
    </Wrapper>
  )
}

export default CreateTest

