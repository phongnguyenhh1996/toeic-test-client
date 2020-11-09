import React from 'react'
import HeaderDashboard from "../HeaderDashboard/HeaderDashboard";

const DashboardLayout: React.FC = (props) => {
  return (
    <div className="main-wrapper">
      <HeaderDashboard><p>Header</p></HeaderDashboard>
      {props.children}
    </div>
  )
}

export default DashboardLayout
