import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import { range } from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'
import { Wrapper } from './TestInfo'

const ButtonPrimary = styled(Button)`
    font-size: 11px;
    color: ${theme.textDarkPrimary};
    &.MuiButton-contained {
        background-color: ${theme.textPrimary2};
        color: ${theme.textLight};
    }
`

const PartGroup = styled(ButtonGroup)`
    margin-bottom: 15px;
`

const QuestionWrapper = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

const Question = styled(Button)`
    color: ${theme.textDarkPrimary};
    min-width: 30px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    .MuiTouchRipple-root {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    &.MuiButton-contained {
        background-color: ${theme.textPrimary2};
        color: ${theme.textLight};
    }
    margin-bottom: 10px;
    font-size: 12px;
`

export const MapNavigator: React.FC = () => {
    return (
        <Wrapper>
            <PartGroup aria-label="outlined button group">
                <ButtonPrimary variant="contained">Part 1</ButtonPrimary>
                <ButtonPrimary>Part 2</ButtonPrimary>
                <ButtonPrimary>Part 3</ButtonPrimary>
                <ButtonPrimary>Part 4</ButtonPrimary>
            </PartGroup>
            <PartGroup aria-label="outlined button group">
                <ButtonPrimary>Part 5</ButtonPrimary>
                <ButtonPrimary>Part 6</ButtonPrimary>
                <ButtonPrimary>Part 7</ButtonPrimary>
            </PartGroup>
            <Grid container spacing={0}>
                {range(100,113).map(item => (
                    <QuestionWrapper key={item} item xs={2}>
                        <Question variant={item === 100 ? "contained" : "outlined"}>{item}</Question>
                    </QuestionWrapper>
                ))}
                
            </Grid>
        </Wrapper>
    )
}
