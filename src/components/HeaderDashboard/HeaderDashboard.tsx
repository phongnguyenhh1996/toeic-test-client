import React from 'react'
import { connect } from "react-redux";


export interface UserInfo {
  email: string,
  password: string
}

interface HeaderProps {

}

const HeaderDashboard: React.FC<HeaderProps> = () => {

  return (
    <p>Header</p>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDashboard)
