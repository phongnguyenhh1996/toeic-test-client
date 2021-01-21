import Grid from '@material-ui/core/Grid';
import React from 'react'
import { ScrollElement } from 'react-scroll';
import styled from 'styled-components';

const QuestionWrapper = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

const QuestionItemLink = ({ children, ...rest }: any) => {
    return (
        <QuestionWrapper {...rest}  ref={(el) => { rest.parentBindings.domNode = el; }}>
            {children}
        </QuestionWrapper>
    );
}

export default ScrollElement(QuestionItemLink)