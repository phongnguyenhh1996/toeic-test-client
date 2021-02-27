import React from 'react'
import styled from 'styled-components/macro'
import { theme } from '../../utils/theme'

const NO_DATA_URL = 'https://res.cloudinary.com/easy-toeic/image/upload/v1613880173/static/error-404-easy-toeic_unheto.svg'

const NoDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin: 30px 0;
`

const Text = styled.div`
    padding-top: 20px;
    color: ${theme.backgroundPrimary};
    font-weight: 500;
`

export const NoData : React.FC = () => {
    return (
        <NoDataWrapper>
          <img width={250} src={NO_DATA_URL} alt="Logo" />
          <Text>No data found!</Text>
        </NoDataWrapper>
    )
}
