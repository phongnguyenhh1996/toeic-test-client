import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Logo, Header, Search, Navigation, CreateButton, HambergerButton, ButtonNavigation } from './Header.styled';
import { FaSearch, FaHome, FaChartPie, FaPlus, FaBars } from "react-icons/fa";
interface Props {
}

export default function ElevateAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
        <Header>
            <Logo>EasyToeic</Logo>
            <Search>
              <input className="input-search" type="text" placeholder="Find a test"/>
              <FaSearch className="icon-search"/>
            </Search>
            <Navigation>
              <li className="nav-item active">
                <ButtonNavigation>
                  <FaHome className="nav-icon"/>
                  Home
                </ButtonNavigation>

              </li>
              <li className="nav-item">
                <ButtonNavigation>
                  <FaChartPie className="nav-icon" />
                  Statitics
                </ButtonNavigation>
              </li>
            </Navigation>
            <CreateButton>
              <FaPlus className="create-icon"/>
              Create a test
            </CreateButton>
            <HambergerButton>
              <FaBars/>
            </HambergerButton>
        </Header>
    </React.Fragment>
  );
}
