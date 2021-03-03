import React, { useMemo, useState } from "react";
import { Grid } from "@material-ui/core";
import { TitleSection, SeeMoreBtn, TestSectionWrapper } from "../style";
import { FaFileAlt, FaBook, FaHeadphones } from "react-icons/fa";
import { TestItem } from "./TestItem";
import { Test } from "../../../utils/function";
import { range } from "lodash";
import { usePrevious } from "../../../utils/hooks";
import { NoData } from "../../../components/NoData";
import DetailTestItem from "../../ListTest/DetailTestItem";
import { NodataWrapper } from "./style";

interface TestSectionProps {
  isLoading: boolean;
  type: string;
  data: Test[];
}

const sectionType: { [key: string]: any } = {
  full: {
    icon: () => <FaFileAlt />,
    title: "Full test",
  },
  reading: {
    icon: () => <FaBook />,
    title: "Reading test",
  },
  listening: {
    icon: () => <FaHeadphones />,
    title: "Listening test",
  },
};

const initiTestItemDetail: Test = {
  name: "",
  description: "",
  testPart: 0,
  testType: 0,
  answers: {},
  avatarSrc: "",
  author: "",
  viewCount: 0,
  likes: 0,
  correctAnswer: {},
  questions: {},
}

export const TestSection: React.FC<TestSectionProps> = ({
  type,
  data,
  isLoading,
}) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [testItemDetail, settestItemDetail] = useState<Test>(initiTestItemDetail)
  const currentSectionType = sectionType[type];
  const preIsLoading = usePrevious(isLoading);
  const isNoData = useMemo(() => {
    if (!isLoading && preIsLoading && data.length === 0) {
      return true;
    }
    return false;
  }, [isLoading, preIsLoading, data]);

  const closeDialog = () => {
    setIsOpenDialog(false);
  };

  const changeIsOpenDialog = (test: any) => {
    settestItemDetail(test);
    setIsOpenDialog(true);
}

  return (
    <TestSectionWrapper>
      <TitleSection>
        <div className="icon-wrapper">{currentSectionType?.icon()}</div>
        <div className="title">{currentSectionType?.title}</div>
      </TitleSection>
      <Grid container spacing={2}>
        {isNoData && <Grid item xs>
          <NodataWrapper>
            <NoData width={100} />
          </NodataWrapper>
        </Grid>
        }
        {isLoading &&
          range(4).map((numb) => (
            <Grid item xs={3} key={numb}>
              <TestItem isSkeletion />
            </Grid>
          ))}
        {!isLoading &&
          data.map((test) => (
            <Grid item xs>
              <TestItem test={test} changeIsOpenDialog={changeIsOpenDialog} />
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <SeeMoreBtn>See more</SeeMoreBtn>
        </Grid>
      </Grid>
      {isOpenDialog && (
        <DetailTestItem
          test={testItemDetail}
          handleClose={closeDialog}
          isOpen={isOpenDialog}
        />
      )}
    </TestSectionWrapper>
  );
};
