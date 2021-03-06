import React from "react";
import { Container, Grid } from "@material-ui/core";
import * as Styled from "./style";
import { theme } from "../../utils/theme";
import {
  FaPencilAlt,
  FaClock,
  FaCloudUploadAlt,
  FaMedal,
} from "react-icons/fa";
import { RiNumbersFill } from "react-icons/ri";
import VerticalBar from "../../components/BarChart";
import RoundedChart from "../../components/RoundedChart";
import LineChart from "../../components/LineChart";

const Statistic: React.FC = () => {
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Styled.Wrapper>
            <Styled.FiguresWrapper>
              <Styled.IconWrapper $bg={theme.backgroundPaginationBtn}>
                <FaPencilAlt color={theme.backgroundPrimary} size="18px" />
              </Styled.IconWrapper>
              <Styled.Figures>
                <Styled.FiguresNumb>450</Styled.FiguresNumb>
                <Styled.FiguresDescription>
                  Tests Attempted
                </Styled.FiguresDescription>
              </Styled.Figures>
            </Styled.FiguresWrapper>
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            <Styled.FiguresWrapper>
              <Styled.IconWrapper $bg={theme.backgroundIconFigures1}>
                <RiNumbersFill color={theme.textIconFigures1} size="20px" />
              </Styled.IconWrapper>
              <Styled.Figures>
                <Styled.FiguresNumb>750</Styled.FiguresNumb>
                <Styled.FiguresDescription>
                  Average Score
                </Styled.FiguresDescription>
              </Styled.Figures>
            </Styled.FiguresWrapper>
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            <Styled.FiguresWrapper>
              <Styled.IconWrapper $bg={theme.backgroundIconFigures2}>
                <FaClock color={theme.textIconFigures2} size="20px" />
              </Styled.IconWrapper>
              <Styled.Figures>
                <Styled.FiguresNumb>200</Styled.FiguresNumb>
                <Styled.FiguresDescription>
                  Exam Hours
                </Styled.FiguresDescription>
              </Styled.Figures>
            </Styled.FiguresWrapper>
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            <Styled.FiguresWrapper>
              <Styled.IconWrapper $bg={theme.backgroundIconFigures3}>
                <FaCloudUploadAlt color={theme.textIconFigures3} size="20px" />
              </Styled.IconWrapper>
              <Styled.Figures>
                <Styled.FiguresNumb>200</Styled.FiguresNumb>
                <Styled.FiguresDescription>
                  Tests Created
                </Styled.FiguresDescription>
              </Styled.Figures>
            </Styled.FiguresWrapper>
          </Styled.Wrapper>
        </Grid>
      </Grid>
      <Styled.ChartGrid container spacing={2}>
        <Grid item xs={9}>
          <Styled.Wrapper>
            <h2 className="title">Performance by parts</h2>
            <VerticalBar />
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            <h2 className="title">Performance by types</h2>
            <RoundedChart />
            <Styled.ChartLegend>
              <Styled.LegendItem $color="#F67A7C">Listening</Styled.LegendItem>
              <Styled.LegendItem $color="#2770C7">Reading</Styled.LegendItem>
            </Styled.ChartLegend>
          </Styled.Wrapper>
        </Grid>
      </Styled.ChartGrid>
      <Styled.ChartGrid container spacing={2}>
        <Grid item xs={6}>
          <Styled.Wrapper>
            <h2 className="title">Performance by last 10 full tests</h2>
            <LineChart />
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            <h2 className="title">Top score</h2>
            <Styled.List>
              <Styled.ListItem>
                <FaMedal size="20px" color="#FBD94B" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>870</Styled.LiNumber>
              </Styled.ListItem>
              <Styled.ListItem>
                <FaMedal size="20px" color="#D7D8C8" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>820</Styled.LiNumber>
              </Styled.ListItem>
              <Styled.ListItem>
                <FaMedal size="20px" color="#F4AA6C" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>780</Styled.LiNumber>
              </Styled.ListItem>
              <Styled.ListItem>
                <FaMedal size="20px" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>660</Styled.LiNumber>
              </Styled.ListItem>
            </Styled.List>
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            <h2 className="title">Top score</h2>
            <Styled.List>
              <Styled.ListItem>
                <FaMedal size="20px" color="#FBD94B" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>870</Styled.LiNumber>
              </Styled.ListItem>
              <Styled.ListItem>
                <FaMedal size="20px" color="#D7D8C8" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>820</Styled.LiNumber>
              </Styled.ListItem>
              <Styled.ListItem>
                <FaMedal size="20px" color="#F4AA6C" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>780</Styled.LiNumber>
              </Styled.ListItem>
              <Styled.ListItem>
                <FaMedal size="20px" />
                <Styled.TestInfor>
                  <Styled.NameInfo>EST TOEIC Test 2020</Styled.NameInfo>
                  <Styled.DateInfo>21/11/2020</Styled.DateInfo>
                </Styled.TestInfor>
                <Styled.LiNumber>660</Styled.LiNumber>
              </Styled.ListItem>
            </Styled.List>
          </Styled.Wrapper>
        </Grid>
        {/* <Grid item xs={3}>
          <Styled.Wrapper>
            <h2 className="title">Test attempted by type</h2>
          </Styled.Wrapper>
        </Grid> */}
      </Styled.ChartGrid>
    </Container>
  );
};

export default Statistic;
