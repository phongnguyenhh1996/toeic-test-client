import React from 'react'
import { MapNavigator } from './components/Navigator'
import { TestInfo } from './components/TestInfo'
import { MainContainer, SideContainer, SideContent, SideInner, Wrapper } from './style'

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
        main container
      </MainContainer>
    </Wrapper>
  )
}

export default CreateTest

