import React from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import bgRightSide from "../../assets/images/learning-english-online.jpg"
import styled from 'styled-components'
import { theme } from '../../utils/theme'

const Title = styled.h1`
  color: ${theme.textPrimary};
`

const Home: React.FC = () => {

  return (
    <Container fixed>
      <Grid container alignItems="center">
        <Grid item xs={7}>
          <img width="100%" src={bgRightSide} alt="Right Banner Background" />
        </Grid>
        <Grid item xs={5} style={{textAlign: 'left'}}>
          <Title>Learn TOEIC together!</Title>
          <p>We are an unofficial TOEIC EST Online test site! This is where we can learn TOEIC together for free. Let's get started right now! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, nemo perspiciatis at nihil delectus aspernatur itaque nam repellat ducimus quam! Minima enim necessitatibus nihil unde placeat aspernatur consequatur ducimus consequuntur?</p>
          <Button variant="contained" color="primary">
            Get started!
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

