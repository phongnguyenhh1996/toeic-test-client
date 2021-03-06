import React from "react";
import { Container, Grid } from "@material-ui/core";
import * as Styled from "./style";

const Statistic: React.FC = () => {

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Styled.Wrapper>
            test
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            test
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            test
          </Styled.Wrapper>
        </Grid>
        <Grid item xs={3}>
          <Styled.Wrapper>
            test
          </Styled.Wrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Statistic;
