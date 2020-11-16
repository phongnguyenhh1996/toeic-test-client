import React from "react";
import { Grid } from "@material-ui/core";
import { TitleSection, SeeMoreBtn, TestSectionWrapper } from "../style";
import { FaFileAlt, FaBook, FaHeadphones } from "react-icons/fa";
import { TestItem } from "./TestItem";

interface TestSectionProps {
  type: string;
}

const sectionType: {[key: string]: any} = {
  full: {
    icon: () => <FaFileAlt />,
    title: 'Full test'
  },
  reading: {
    icon: () => <FaBook />,
    title: 'Reading test'
  },
  listening: {
    icon: () => <FaHeadphones />,
    title: 'Listening test'
  }
}

export const TestSection: React.FC<TestSectionProps> = ({ type }) => {
  const currentSectionType = sectionType[type]
  return (
    <TestSectionWrapper>
      <TitleSection>
        <div className="icon-wrapper">
          {currentSectionType?.icon()}
        </div>
        <div className="title">{currentSectionType?.title}</div>
      </TitleSection>
      <Grid container spacing={2}>
        <Grid item xs>
          <TestItem />
        </Grid>
        <Grid item xs>
          <TestItem />
        </Grid>
        <Grid item xs>
          <TestItem />
        </Grid>
        <Grid item xs>
          <TestItem />
        </Grid>
        <Grid item xs>
          <TestItem />
        </Grid>
      </Grid>
      <Grid item xs={12} wrap="nowrap">
        <Grid container>
          <SeeMoreBtn>See more</SeeMoreBtn>
        </Grid>
      </Grid>
    </TestSectionWrapper>
  );
};
