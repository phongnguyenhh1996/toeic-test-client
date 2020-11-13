import React from 'react'
import HeaderDashboard from "../HeaderDashboard/HeaderDashboard";
import MainContainer from '../MainContainer';

const DashboardLayout: React.FC = (props) => {
  return (
    <div className="main-wrapper">
      <HeaderDashboard><p>Header</p></HeaderDashboard>
      <MainContainer>
        {props.children}
      </MainContainer>
    </div>
  )
}

export default DashboardLayout
