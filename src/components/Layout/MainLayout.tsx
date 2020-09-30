import Header from "../Header/Header";
import React from 'react'

const MainLayout: React.FC = (props) => {
  return (
    <div className="main-wrapper">
      <Header />
      {props.children}
    </div>
  )
}

export default MainLayout
