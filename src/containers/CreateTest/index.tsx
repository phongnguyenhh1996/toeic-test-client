import { get } from 'lodash'
import React, { useEffect } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { changeQuestionData, initTest } from '../../actions/tests'
import CustomButton from '../../components/CustomButton'
import { Player } from '../../components/Player'
import { createTestData, Question as IQuestion, getPartInfoFromQuestion } from '../../utils/function'
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

  const currentQuestionNumb = useSelector(state => get(state, `tests.currentQuestion`))

  const currentQuestion = useSelector(state => get(state, `tests.test.questions.${currentQuestionNumb}`, {})) as IQuestion
  const currentAnswers = useSelector(state => get(state, `tests.test.answers.${currentQuestionNumb}`, {}))
  const currentCorrectAnswer = useSelector(state => get(state, `tests.test.correctAnswer.${currentQuestionNumb}`, {}))

  useEffect(() => {
    const test = createTestData(testType, testPart)
    dispatch(initTest(test))

  }, [testType, testPart, dispatch])

  const onUploadImage = (result: any) => {
    dispatch(changeQuestionData(result, 'imageSrc', currentQuestionNumb))
  }

  const onUploadAudio = (result: any) => {
    dispatch(changeQuestionData(result, 'audioSrc', currentQuestionNumb))
  }

  const handleRemoveMedia = (key: string) => () => {
    dispatch(changeQuestionData(null, key, currentQuestionNumb))
  }

  const partInfo = getPartInfoFromQuestion(currentQuestionNumb)

  return (
    <Wrapper>
      <SideContainer>
        <SideInner>
          <SideContent>
            <TestInfo testType={testType} testPart={testPart}/>
            <MapNavigator testType={testType} testPart={testPart}/>
          </SideContent>
        </SideInner>
      </SideContainer>
      <MainContainer>
        <PartDescription>
          Part {partInfo.partNumb + 1} - {partInfo.description}
        </PartDescription>
        <UploadWrapper isRowDirection={!currentQuestion.audioSrc && !currentQuestion.imageSrc}>
          {currentQuestion.audioSrc ?
            <MediaWrapper width="100%">
              <Player src={currentQuestion.audioSrc}/>
              <RemoveMedia onClick={handleRemoveMedia('audioSrc')}>
                <FaTimes />
              </RemoveMedia >
            </MediaWrapper>
            : <UploadFile onLoadedFile={onUploadAudio} type="audio" />
          }
          {currentQuestion.imageSrc ?
            <MediaWrapper width="auto">
              <img width="355px" src={currentQuestion.imageSrc} alt="Uploaded img" />
              <RemoveMedia onClick={handleRemoveMedia('imageSrc')}>
                <FaTimes />
              </RemoveMedia>
            </MediaWrapper>
            : <UploadFile onLoadedFile={onUploadImage} type="image" />}
        </UploadWrapper>
        <Question
          question={currentQuestion}
          answers={currentAnswers}
          correctAnswer={currentCorrectAnswer}
        />
        <CustomButton size="large" theme="gray">
          <FaPlus /> Add more question
        </CustomButton>
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

