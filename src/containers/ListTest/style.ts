import styled from 'styled-components';
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { theme } from "../../utils/theme";
import Pagination from '@material-ui/lab/Pagination';



// css style for grid *****************
export const GridListTest = styled(Grid)`
    margin-top:50px;
    
    min-height:450px;
`;
// css style for grid ending******************

// css style for tabs ****************
export const PaperListTest = styled(Paper)`
    box-shadow: none;
    background-color: transparent;
`;
export const TabsListTest = styled(Tabs)`
   color: ${theme.textDarkPrimary};
   .MuiTabs-indicator {
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
export const PaginationTest = styled(Pagination)`
    .MuiPagination-ul li .MuiPaginationItem-page.Mui-selected{
        background-color: ${theme.backgroundPaginationBtn};
        border: 1px solid ${theme.backgroundSecondary};
    }
    .MuiPaginationItem-root{
        border-radius:4px;
        border: 1px solid #B1B1B1;
    }
    
`;

export const ContainerPagin = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top:50px
`;

export const ContainerDetailTest = styled.section`
    padding:10px;
    border-radius:10px;
    overflow:hidden;
`;
export const DetailTestTop = styled.div`
    background-color:${theme.backgroundDetailTest};
    padding:100px 0;
`;


