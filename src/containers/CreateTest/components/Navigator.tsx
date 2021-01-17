import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import { get, range } from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { goToQuestion } from '../../../actions/tests'
import { TEST_TYPE, TEST_TYPE_INFO } from '../../../constants'
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

interface NavigationProps {
    testType: number
    testPart: number
}

export const MapNavigator: React.FC<NavigationProps> = ({ testType, testPart }) => {

    const dispatcher = useDispatch()
    const currentQuestion = useSelector(state => get(state, 'tests.currentQuestion'))

    const handleClickQuestion = (item: number) => () => {
        dispatcher(goToQuestion(item))
    }

    const renderPartNav = () => {
        if (testType === TEST_TYPE.PART) {
            const title = `Part ${testPart + 1}`

            return (
                <PartGroup aria-label="outlined button group">
                    <ButtonPrimary variant="contained">{title}</ButtonPrimary>
                </PartGroup>
            )
        } else {
            return (
                <>
                    {(testType === TEST_TYPE.FULL || testType === TEST_TYPE.LISTENING) && (
                        <PartGroup aria-label="outlined button group">
                            {range(1, 5).map(numb => {
                                return (
                                    <ButtonPrimary key={numb}>Part {numb}</ButtonPrimary>
                                )
                            })}
                        </PartGroup>
                    )}
                    {(testType === TEST_TYPE.FULL || testType === TEST_TYPE.READING) && (
                        <PartGroup aria-label="outlined button group">
                            {range(5, 8).map(numb => {
                                return (
                                    <ButtonPrimary key={numb}>Part {numb}</ButtonPrimary>
                                )
                            })}
                        </PartGroup>
                    )}
                </>
            )
        }
    }

    const isTestPart = testType === TEST_TYPE.PART
    const startQuestion = isTestPart
        ? get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}.fromNumb`)
        : get(TEST_TYPE_INFO, `${testType}.fromNumb`)
    const endQuestion = isTestPart
        ? startQuestion + get(TEST_TYPE_INFO, `${TEST_TYPE.PART}.${testPart}.totalQuestion`)
        : startQuestion + get(TEST_TYPE_INFO, `${testType}.totalQuestion`)
    return (
        <Wrapper>
            {renderPartNav()}
            <GridQuestions container spacing={0}>
                {range(startQuestion, endQuestion).map(item => (
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
