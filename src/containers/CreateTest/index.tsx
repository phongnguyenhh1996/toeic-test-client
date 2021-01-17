import { get } from 'lodash'
import React, { useEffect, useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { initTest } from '../../actions/tests'
import CustomButton from '../../components/CustomButton'
import { Player } from '../../components/Player'
import { createTestData } from '../../utils/function'
import { MapNavigator } from './components/Navigator'
import { Question } from './components/Question'
import { TestInfo } from './components/TestInfo'
import { UploadFile } from './components/UploadFile'
import { MainContainer, MediaWrapper, NavigationBtnGroup, PartDescription, RemoveMedia, SideContainer, SideContent, SideInner, UploadWrapper, Wrapper } from './style'

const CreateTest: React.FC = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const [imageUpload, setImageUpload] = useState<any>(null)
  const [audioUpload, setAudioUpload] = useState<any>(null)

  const testType = get(location, 'state.testType')
  const testPart = get(location, 'state.testPart')

  useEffect(() => {
    const test = createTestData(testType, testPart)
    dispatch(initTest(test))
    
  }, [testType, testPart, dispatch])

  const onUploadImage = (result: any) => {
    setImageUpload(result)
  }

  const onUploadAudio = (result: any) => {
    setAudioUpload(result)
  }

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
          Look at the picture and listen to the sentences. Choose the sentence that best describes the picture:
        </PartDescription>
        <UploadWrapper isRowDirection={!imageUpload && !audioUpload}>
          {audioUpload ?
            <MediaWrapper width="100%">
              <Player src={audioUpload}/>
              <RemoveMedia onClick={() => setAudioUpload(null)}>
                <FaTimes />
              </RemoveMedia >
            </MediaWrapper>
            : <UploadFile onLoadedFile={onUploadAudio} type="audio" />
          }
          {imageUpload ?
            <MediaWrapper width="auto">
              <img width="355px" src={imageUpload} alt="Uploaded img" />
              <RemoveMedia onClick={() => setImageUpload(null)}>
                <FaTimes />
              </RemoveMedia>
            </MediaWrapper>
            : <UploadFile onLoadedFile={onUploadImage} type="image" />}
        </UploadWrapper>
        <Question />
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

