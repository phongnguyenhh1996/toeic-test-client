import styled from 'styled-components';
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { theme } from "../../utils/theme";
import Pagination from '@material-ui/lab/Pagination';



// css style for grid *****************
export const GridListTest = styled(Grid)`
    margin-top:50px;
`;
// css style for grid ending******************

// css style for tabs ****************
export const PaperListTest = styled(Paper)`
    box-shadow: none;
    background-color: transparent;
`;
export const TabsListTest = styled(Tabs)`
   color: ${theme.textDarkPrimary};
   .PrivateTabIndicator-colorPrimary-2{
    background-color: ${theme.backgroundSecondary};
   }

`;
export const TabListTest = styled(Tab)`
   color: ${theme.textDarkPrimary};
   &.Mui-selected{
       color:${theme.textDarkPrimary};
   }
`;
// css style for tabs ending ****************


// css style for pagination start ***********

export const ContainerPagin = styled.div`
   margin: 50px 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const PaginationTest = styled(Pagination)`
    .MuiPagination-ul li .MuiPaginationItem-page.Mui-selected{
        background-color: ${theme.backgroundPaginationBtn};
        border: 1px solid ${theme.backgroundSecondary};
    }
  
`;


// css style for pagination ending *********************** 