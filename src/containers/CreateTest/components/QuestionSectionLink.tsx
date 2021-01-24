import React from 'react'
import { ScrollElement } from 'react-scroll';
import styled from 'styled-components';
import { Wrapper } from './TestInfo';

const WrapperQuestion = styled(Wrapper)`
    padding: 0;
`
const QuestionSectionLink = ({ children, parentBindings, ...rest }: any) => {
    return (
        <WrapperQuestion {...rest}  ref={(el: any) => { parentBindings.domNode = el; }}>
            {children}
        </WrapperQuestion>
    );
}

export default ScrollElement(QuestionSectionLink)