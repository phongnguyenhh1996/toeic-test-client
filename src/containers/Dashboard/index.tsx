import React from 'react'
import { Grid, Container, Button } from '@material-ui/core'
import { DashboardWrapper, WeeklyOverview, SectionStaticsWrapper } from './style'
import CircularProgress from '../../components/CircularProgress'
import { FaBook, FaHeadphones } from 'react-icons/fa'
import { SectionStatics } from './components/SectionStatics'

const Dashboard: React.FC = () => {

  const percent = 75

  return (
    <DashboardWrapper>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <WeeklyOverview>
              <h2 className="title">Weekly Overview</h2>
              <div className="statitics">
                <CircularProgress percent={percent}>
                  <div className="statitics-content">
                    <p className="percent"><span>{percent}</span>%</p>
                    <p className="description">Avg.<br />Performance</p>
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
                <a href="/" className="show-detail">Show details</a>
              </div>
            </WeeklyOverview>
          </Grid>
          <Grid item xs={5}>
            <WeeklyOverview>
              <h2 className="title">Lastest attempted</h2>
              <div className="list-test">
                {[1, 2, 3].map(i =>
                  <div key={i} className="bottom bottom--test">
                    <div>
                      <p className="title">EST 2019 Test 1</p>
                      <p className="total">29/10/2020</p>
                    </div>
                    <a href="/" className="show-detail">
                      <Button>
                        Result
                      </Button>
                    </a>
                  </div>
                )}
                
              </div>
            </WeeklyOverview>
          </Grid>
          <Grid item xs={2}>
            <WeeklyOverview>xs=6</WeeklyOverview>
          </Grid>
        </Grid>
      </Container>

    </DashboardWrapper>
  )
}

export default Dashboard

