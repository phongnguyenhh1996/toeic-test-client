import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { DashboardWrapper, WeeklyOverview, SectionStaticsWrapper } from './style'
import CircularProgress from '../../components/CircularProgress'
import { FaBook, FaHeadphones } from 'react-icons/fa'
import { SectionStatics } from './components/SectionStatics'
import { theme } from '../../utils/theme'

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
                    <p className="description">Avg.<br/>Performance</p>
                  </div>
                </CircularProgress>
                <SectionStaticsWrapper>
                  <SectionStatics
                    icon={() => <FaBook />}
                    colorArr={["#F67A7C", "#F8A880"]}
                    title="Reading"
                    percent={80}
                  />
                  <SectionStatics
                    icon={() => <FaHeadphones />}
                    colorArr={["#2770C7", "#3499DA"]}
                    title="Listening"
                    percent={80}
                  />
                </SectionStaticsWrapper>
              </div>
            </WeeklyOverview>
          </Grid>
          <Grid item xs={5}>
            <WeeklyOverview>xs=6</WeeklyOverview>
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

