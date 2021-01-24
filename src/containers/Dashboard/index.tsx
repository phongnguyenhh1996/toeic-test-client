import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import {
  WeeklyOverview,
  SectionStaticsWrapper,
  AvatarSection
} from "./style";
import CircularProgress from "../../components/CircularProgress";
import { FaBook, FaHeadphones } from "react-icons/fa";
import { SectionStatics } from "./components/SectionStatics";
import clsx from "clsx";
import CustomButton from "../../components/CustomButton";
import { TestSection } from "./components/TestSection";
import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
  const percent = 75;
  const dataUser = useSelector((state:any) => state.user.detail);
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs>
          <WeeklyOverview>
            <h2 className="title">Weekly Overview</h2>
            <div className="statitics">
              <CircularProgress percent={percent}>
                <div className="statitics-content">
                  <p className="percent">
                    <span>{percent}</span>%
                  </p>
                  <p className="description">
                    Avg.
                    <br />
                    Performance
                  </p>
                </div>
              </CircularProgress>
              <SectionStaticsWrapper>
                <SectionStatics
                  icon={() => <FaBook />}
                  colorArr={["#F67A7C", "#F8A880", "247, 134, 75, 0.5"]}
                  title="Reading"
                  percent={82}
                />
                <SectionStatics
                  icon={() => <FaHeadphones />}
                  colorArr={["#2770C7", "#3499DA", "50, 145, 217, 0.5"]}
                  title="Listening"
                  percent={40}
                />
              </SectionStaticsWrapper>
            </div>
            <div className="bottom">
              <div>
                <p className="title">Total tests attempted</p>
                <p className="total">0 test module</p>
              </div>
              <a href="/" className="show-detail">
                Show details
              </a>
            </div>
          </WeeklyOverview>
        </Grid>
        <Grid item xs>
          <WeeklyOverview>
            <h2 className="title">Lastest attempted</h2>
            <div className="list-test">
              {[true, false, true].map((isDone, index) => (
                <div key={index} className="bottom bottom--test">
                  <div>
                    <p
                      className={clsx("title", {
                        done: isDone,
                        "not-done": !isDone,
                      })}
                    >
                      EST 2019 Test 1
                    </p>
                    <p className="total">29/10/2020</p>
                  </div>
                  <a
                    href="/"
                    className={clsx("show-detail", {
                      done: isDone,
                      "not-done": !isDone,
                    })}
                  >
                    <Button>{isDone ? "Result" : "Retest"}</Button>
                  </a>
                </div>
              ))}
            </div>
          </WeeklyOverview>
        </Grid>
        <Grid item md={4} lg={3}>
          <WeeklyOverview>
            <AvatarSection>
              <div
                className="avatar-wrapper"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/social-ape-43919.appspot.com/o/avatar.jpg?alt=media&token=b59aff30-58d4-47f4-8d26-84ee205d8deb)",
                }}
              ></div>
              <div className="info-wrapper">
                <p className="name">{dataUser.username}</p>
                <p className="role">Student</p>
                <CustomButton theme="green" className="edit-btn">
                  Edit profile
                </CustomButton>
              </div>
            </AvatarSection>
          </WeeklyOverview>
        </Grid>
      </Grid>
      <TestSection type="full"/>
      <TestSection type="listening"/>
      <TestSection type="reading"/>
    </Container>
  );
};

export default Dashboard;
