import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import { get, range } from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { goToQuestion } from '../../../actions/tests'
import { theme } from '../../../utils/theme'
import { Wrapper } from './TestInfo'

const GridQuestions = styled(Grid)`
    max-height: calc(100vh - 615px);
    overflow: auto;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar {
        width: 2px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
	    background-color: ${theme.textPrimary2};
    }
`

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

    const dispatcher = useDispatch()
    const currentQuestion = useSelector(state => get(state, 'tests.currentQuestion'))

    const handleClickQuestion = (item: number) => () => {
        dispatcher(goToQuestion(item))
    }

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
            <GridQuestions container spacing={0}>
                {range(1,100).map(item => (
                    <QuestionWrapper key={item} item xs={2}>
                        <Question
                            onClick={handleClickQuestion(item)}
                            variant={item === currentQuestion ? "contained" : "outlined"}
                        >
                            {item}
                        </Question>
                    </QuestionWrapper>
                ))}
                
            </GridQuestions>
        </Wrapper>
    )
}
