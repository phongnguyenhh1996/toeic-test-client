import React from 'react'
import { FaPlus } from 'react-icons/fa'
import CustomButton from '../../components/CustomButton'
import { MapNavigator } from './components/Navigator'
import { Question } from './components/Question'
import { TestInfo } from './components/TestInfo'
import { UploadFile } from './components/UploadFile'
import { MainContainer, NavigationBtnGroup, PartDescription, SideContainer, SideContent, SideInner, UploadWrapper, Wrapper } from './style'

const CreateTest: React.FC = () => {



  return (
    <Wrapper>
      <SideContainer>
        <SideInner>
          <SideContent>
            <TestInfo />
            <MapNavigator />
          </SideContent>
        </SideInner>
      </SideContainer>
      <MainContainer>
        <PartDescription>
          Look at the picture and listen to the sentences. Choose the sentence that best describes the picture:
        </PartDescription>
        <UploadWrapper>
          <UploadFile type="audio"/>
          <UploadFile type="image"/>
        </UploadWrapper>
        <Question />
        <CustomButton size="large" theme="gray">
          <FaPlus /> Add question
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

