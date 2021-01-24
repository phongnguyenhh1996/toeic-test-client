import Grid from '@material-ui/core/Grid';
import React from 'react'
import { ScrollElement } from 'react-scroll';
import styled from 'styled-components';
import { theme } from '../../../../utils/theme';

const GridQuestions = styled(Grid)`
    position: relative;
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

const QuestionContainer = ({ children, parentBindings, ...rest }: any) => {
    return (
        <GridQuestions {...rest}  ref={(el) => { parentBindings.domNode = el; }}>
            {children}
        </GridQuestions>
    );
}

export default ScrollElement(QuestionContainer)
