import React from 'react'
import HeaderCreateTest from "../HeaderCreateTest/HeaderCreateTest";
import MainContainer from '../MainContainer';

const CreateTestLayout: React.FC = (props) => {
  return (
    <div className="main-wrapper">
      <HeaderCreateTest />
      <MainContainer>
        {props.children}
      </MainContainer>
    </div>
  )
}

export default CreateTestLayout
