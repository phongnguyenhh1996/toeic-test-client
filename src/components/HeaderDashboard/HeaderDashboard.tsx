import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Logo,
  Header,
  Search,
  Navigation,
  CreateButton,
  HambergerButton,
  ButtonNavigation,
} from "./Header.styled";
import {
  FaSearch,
  FaHome,
  FaChartPie,
  FaPlus,
  FaBars,
  FaFileAlt,
  FaBook,
  FaHeadphones,
} from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import {
  Popover,
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
  Collapse,
} from "@material-ui/core";
interface Props { }

export default function ElevateAppBar(props: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openCreateTest, setOpenCreateTest] = useState(true);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickCreateTest = () => {
    setOpenCreateTest(!openCreateTest);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <Logo>EasyToeic</Logo>
        <Search>
          <input
            className="input-search"
            type="text"
            placeholder="Find a test"
          />
          <FaSearch className="icon-search" />
        </Search>
        <Navigation>
          <li className="nav-item active">
            <ButtonNavigation>
              <FaHome className="nav-icon" />
              Home
            </ButtonNavigation>
          </li>
          <li className="nav-item">
            <ButtonNavigation>
              <FaChartPie className="nav-icon" />
              Statitics
            </ButtonNavigation>
          </li>
          <li className="nav-item">
            <ButtonNavigation>
              <FaFileAlt className="nav-icon" />
              List Tests
            </ButtonNavigation>
          </li>
        </Navigation>
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
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItem button>
              <ListItemIcon>
                <FaFileAlt />
              </ListItemIcon>
              <ListItemText primary="Full test" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FaBook />
              </ListItemIcon>
              <ListItemText primary="Reading test" />
            </ListItem>
            <ListItem button onClick={handleClickCreateTest}>
              <ListItemIcon>
                <FaHeadphones />
              </ListItemIcon>
              <ListItemText primary="Listening test" />
              {openCreateTest ? <MdExpandLess /> : <MdExpandMore />}
            </ListItem>
            <Collapse in={openCreateTest} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <FaHeadphones />
                  </ListItemIcon>
                  <ListItemText primary="Part 1" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Popover>
        <HambergerButton>
          <FaBars />
        </HambergerButton>
      </Header>
    </React.Fragment>
  );
}
