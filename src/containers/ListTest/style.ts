import styled from 'styled-components';
import { Paper, Tabs, Tab, Dialog } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { theme } from "../../utils/theme";
import Pagination from '@material-ui/lab/Pagination';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';

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


export const TopImg = styled.div`
    padding-top: 56.25%;
    background-color: ${theme.backgroundGray2};
    background-size: cover;
    background-position: center;
`
export const DialogTest = styled(Dialog)`
    font-family: "Roboto";
    .MuiPaper-root {
        min-width: 450px;
    }
`

export const DialogTop = styled(MuiDialogTitle)`
    position: relative;
    padding: 0;
    div{
        h3{
            color: ${theme.textLight};
            font-size: 40px;
            text-transform: uppercase;
            font-weight: 700;
        }
        .dialog-top-span{
            position: absolute;
            background-color: ${theme.backgroundGray};
            border-radius: 4px;
            padding: 4px 6px;
        }
        .dialog-top-span-1{
            bottom: -10px;
            left: 16px;
            color: ${theme.textDark2};
        }
        .dialog-top-span-2{
            bottom: -10px;
            right: 16px;
            color: ${theme.textViolet}
        }
    }
`;
export const DialogContentTop = styled.div`
    margin: 15px 0;
    border-bottom: 2px solid ${theme.backgroundGray};
    padding-bottom:30px;
    h3{
        font-size: 22px;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 15px;
    }
    div{
        display: flex;
        justify-content: space-between;
        p span{
            color: ${theme.textDark2}
        }
        p span:nth-child(1){
            margin-left: 30px;
        }
        p span:nth-child(2){
            background-color: ${theme.backgroundGray};
            border-radius: 4px;
            padding: 4px 6px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
`;
export const DialogContentBody = styled.div`
    padding: 15px 6px;
    border-radius: 6px;
    background-color: ${theme.backgroundGray2};
    color: ${theme.textDark2};
`;
export const Dialogbottom = styled(MuiDialogActions)`
   justify-content: space-between;
   padding: 16px;
   .btn-dialog{
       color: ${theme.textLight};
       text-transform: capitalize;
       padding: 18px 14px;
       height: 62px;
       flex-basis: 48%;
   }
`;

// css style for pagination start ***********
export const PaginationTest = styled(Pagination)`
    .MuiPagination-ul li .MuiPaginationItem-page.Mui-selected{
        background-color: ${theme.backgroundPaginationBtn};
    }
    .MuiPaginationItem-root{
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    }
`;

export const ContainerPagin = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top:50px
`;



