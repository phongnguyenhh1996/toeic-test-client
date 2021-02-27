import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { get, range } from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { scroller } from 'react-scroll'

import { goToQuestion } from '../../../../actions/tests'
import { TEST_TYPE, TEST_TYPE_INFO } from '../../../../constants'
import { getFirstQuestion, getPartInfoFromQuestion, Question as IQuestion } from '../../../../utils/function'
import { theme } from '../../../../utils/theme'
import { Wrapper } from '../TestInfo'
import { usePrevious } from '../../../../utils/hooks'
import QuestionContainer from './QuestionContainer'
import QuestionItemLink from './QuestionItemLink'
import { IGroupQuestion } from '../../../../reducers/tests'

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
interface IQuestionStyled {
  $isGroupQuestion: boolean
}

const Question = styled(Button)<IQuestionStyled>`
    color: ${theme.textDarkPrimary};
    min-width: 30px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    background-color: ${props => props.$isGroupQuestion ? theme.backgroundPaginationBtn : 'initial'};
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
    groupQuestion: IGroupQuestion
}

const MapNavigator: React.FC<NavigationProps> = ({ testType, testPart, groupQuestion }) => {

    const dispatcher = useDispatch()
    const currentQuestionNumb = useSelector(state => get(state, `tests.currentQuestion`))
    const currentQuestion = useSelector(state => get(state, `tests.test.questions.${currentQuestionNumb}`, {})) as IQuestion
    const prevCurrentQuestion = usePrevious(currentQuestionNumb)
    const currentGroupQuestion = groupQuestion[currentQuestion.questionGroupId as number]

    useEffect(() => {
        if (currentQuestionNumb !== prevCurrentQuestion) {
            scroller.scrollTo(currentQuestionNumb.toString(), {
                duration: 500,
                delay: 0,
                smooth: true,
                containerId: 'containerElement',
            })
        }
    }, [currentQuestionNumb, prevCurrentQuestion])

    const handleClickQuestion = (item: number) => () => {
        dispatcher(goToQuestion(item))
    }

    const goToPart = (partNumb: number) => () => {
        const questionToGo = getFirstQuestion(TEST_TYPE.PART, partNumb)
        dispatcher(goToQuestion(questionToGo))
    }

    const renderPartNav = () => {
        const partInfo = getPartInfoFromQuestion(currentQuestionNumb) || {}

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
                                    <ButtonPrimary
                                        onClick={goToPart(numb-1)}
                                        variant={partInfo.partNumb === numb - 1 ? 'contained' : 'outlined'}
                                        key={numb}
                                    >
                                        Part {numb}
                                    </ButtonPrimary>
                                )
                            })}
                        </PartGroup>
                    )}
                    {(testType === TEST_TYPE.FULL || testType === TEST_TYPE.READING) && (
                        <PartGroup aria-label="outlined button group">
                            {range(5, 8).map(numb => {
                                return (
                                    <ButtonPrimary
                                        onClick={goToPart(numb-1)}
                                        variant={partInfo.partNumb === numb - 1 ? 'contained' : 'outlined'}
                                        key={numb}
                                    >
                                        Part {numb}
                                    </ButtonPrimary>
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
            <QuestionContainer name="containerElement" id="containerElement" container spacing={0}>
                {range(startQuestion, endQuestion).map(item => (
                    <QuestionItemLink name={item.toString()} key={item} item xs={2}>
                        <Question
                            $isGroupQuestion={currentGroupQuestion && currentGroupQuestion.includes(item)}
                            onClick={handleClickQuestion(item)}
                            variant={item === currentQuestionNumb ? "contained" : "outlined"}
                        >
                            {item}
                        </Question>
                    </QuestionItemLink>
                ))}
            </QuestionContainer>

        </Wrapper>
    )
}

export default MapNavigator
