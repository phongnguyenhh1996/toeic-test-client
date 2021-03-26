import React, { Fragment, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Header,
  Search,
  CreateButton,
  HambergerButton,
  LogoWrapper,
  LinkNav,
  NavTabs,
} from "./Header.styled";
import {
  FaSearch,
  FaHome,
  FaChartPie,
  FaPlus,
  FaBars,
  FaFileAlt,
} from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import {
  Popover,
  ListItem,
  List,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Logo } from "../Logo";
import { TEST_TYPE, TEST_TYPE_INFO } from "../../constants";
import { useHistory } from "react-router-dom";
import Tab from "@material-ui/core/Tab";

interface Props {
 }

export default function ElevateAppBar(props: Props) {

  const history = useHistory()
  const pathname = history?.location?.pathname
  
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openCreateTest, setOpenCreateTest] = useState(false);

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl2(null);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const navToCreateTest = (testType: any, testPart: any) => (e: any) => {
    history.push({
      pathname: '/create-test',
      state: {
        testType,
        testPart
      }
    })
  }

  const handleClickCreateTest = () => {
    setOpenCreateTest(!openCreateTest);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <LogoWrapper>
          <Logo width="145px" />
        </LogoWrapper>
        <Search>
          <input
            className="input-search"
            type="text"
            placeholder="Find a test"
          />
          <FaSearch className="icon-search" />
        </Search>
        <NavTabs
          value={pathname}
          aria-label="disabled tabs example"
        >
          <Tab
            label={<LinkNav to="/">
              <FaHome className="nav-icon" />
              Home
            </LinkNav>} value="/"/>
          <Tab label={<LinkNav to="/statistic">
                <FaChartPie className="nav-icon" />
                Statitics
              </LinkNav>} value="/statistic" />
          <Tab label={
            <LinkNav to="/list-test">
              <FaFileAlt className="nav-icon" />
              List Tests
            </LinkNav>
          } value="/list-test"/>
        </NavTabs>
        <CreateButton onClick={handleClick}>
          <FaPlus className="create-icon" />
          Create a test
        </CreateButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <List component="nav" aria-labelledby="nested-list-subheader">
            {Object.values(TEST_TYPE).map((testType: any) => 
              {
                const isTestPart = testType === TEST_TYPE.PART
                let title
                let testPartData
                if (isTestPart) {
                  title = 'Part test'
                  testPartData = TEST_TYPE_INFO[testType]
                } else {
                  title = TEST_TYPE_INFO[testType].title
                }
                return (
                  <Fragment key={testType}>
                    <ListItem button onClick={isTestPart ? handleClickCreateTest : navToCreateTest(testType, undefined)}>

                      <ListItemText primary={title} />
                        { isTestPart && (openCreateTest ? <MdExpandLess /> : <MdExpandMore />)}
                      </ListItem>
                    {isTestPart && testPartData && (
                      <Collapse in={openCreateTest} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {Object.keys(testPartData).map((testPart: any, index: number) => {
                            return (
                              <ListItem key={testPart} button onClick={navToCreateTest(testType, parseInt(testPart) )}>
                                <ListItemText primary={"Part " + (index + 1)} />
                              </ListItem>
                            )
                          })}
                        </List>
                      </Collapse>
                    )}
                  </Fragment>
                 
            )})}
          </List>
        </Popover>
        <HambergerButton onClick={handleClickMenu}>
          <FaBars />
        </HambergerButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Header>
    </React.Fragment>
  );
}
