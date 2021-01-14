import Checkbox from '@material-ui/core/Checkbox'
import { range } from 'lodash'
import React from 'react'
import { FaCheckCircle, FaEllipsisV } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'
import { Input, Wrapper } from './TestInfo'

const Header = styled.div`
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;
    color: #fff;
    background: ${theme.textPrimary2};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;
`

const HeaderTitle = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;

`

const WrapperQuestion = styled(Wrapper)`
    padding: 0;
`

const HeaderMenuIcon = styled(FaEllipsisV)`
    margin-left: auto;
    font-size: 18px;
`

const Content = styled.div`
    padding: 20px;
`

const AnswerWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: -10px;
    margin-top: 5px;
`

const CheckboxPrimary = styled(Checkbox)`
    &.Mui-checked {
        color: ${theme.textPrimary2}
    }
`


interface ExplanationHeadingProps {
    text: string;
}

export const ExplanationHeading = styled.div<ExplanationHeadingProps>`
    height: 30px;
    position: relative;
    margin-bottom: 15px;
    ::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        transform: translateY(-50%);
        background-color: ${theme.textDarkSecondary};
    }
    ::after {
        position: absolute;
        content: "${props => props.text}";
        top: 50%;
        transform: translateY(-50%);
        left: 30px;
        background-color: #fff;
        padding: 0 10px;
        color: ${theme.textDark2};
    }
`

export const Question : React.FC= () => {
    return (
        <WrapperQuestion>
            <Header>
                <HeaderTitle>Question 1</HeaderTitle>
                <HeaderMenuIcon/>
            </Header>
            <Content>
                <Input
                    size="small"
                    id="outlined-basic"
                    multiline
                    fullWidth
                    rows={3}
                    label="Question"
                    variant="outlined"
                    placeholder="Write your question here"
                />

                {range(1, 5).map(numb => (
                    <AnswerWrapper key={numb}>
                        <CheckboxPrimary
                            color="default"
                            icon={<FaCheckCircle />}
                            checkedIcon={<FaCheckCircle />}
                        />
                        <Input
                            size="small"
                            id="outlined-basic"
                            multiline
                            fullWidth
                            rowsMax={3}
                            label={"Answer " + numb}
                            variant="outlined"
                            placeholder="Write your answer here"
                        />
                    </AnswerWrapper>
                ))}
                <ExplanationHeading text="Answer explanation (optional)"/>
                <Input
                    bg="#E4E4E4"
                    size="small"
                    id="outlined-basic"
                    multiline
                    fullWidth
                    rows={3}
                    variant="outlined"
                    placeholder="Add explanation for the correct answer."
                />
            </Content>
        </WrapperQuestion>
    )
}
