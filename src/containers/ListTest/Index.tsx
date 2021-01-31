import React,{ useEffect, useState } from 'react';
import { Grid, Container } from "@material-ui/core";
import { PaperListTest, TabsListTest, TabListTest, ContainerPagin, GridListTest } from './style';
import { TestItem } from '../Dashboard/components/TestItem';
import { useDispatch, useSelector } from 'react-redux';
import { listTestRequest } from '../../actions/list_Test';
import { usePrevious } from '../../utils/hooks';
import { range } from 'lodash';
import PaginationLink from './TestPagtion';
import { useLocation } from 'react-router-dom';
import DetailTestItem from './DetailTestItem';


const TAB_TYPE: any = {
    0: 'all',
    1: 'created',
    2: 'completed'
}
  
const ListTest: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [isOpenDialog,setIsOpenDialog] = useState(false);
    const listTest = useSelector((state:any)=> state.listTest) 
    const isLoading = useSelector((state:any)=> state.listTest.loading) 
    const dispatch = useDispatch();
    const location = useLocation()
    
    
    const changeIsOpenDialog = () =>{
        setIsOpenDialog(!isOpenDialog);
        console.log(isOpenDialog);
    }
    const handleChange = (event: any, newValue: number) => {
        setTabIndex(newValue);
    }
    const prevTabIndex = usePrevious(tabIndex)
    const testsObject = listTest[TAB_TYPE[tabIndex]]
    const testsData = testsObject?.tests
    const totalPage = testsObject?.totalPages
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10) - 1;
    const prevPage = usePrevious(page)
    
    useEffect(()=>{
        if ((tabIndex !== prevTabIndex && !testsData) || (page !== prevPage)) {
            dispatch(listTestRequest(TAB_TYPE[tabIndex], page));
        }
    },[prevTabIndex, tabIndex, testsData, dispatch, page, prevPage])

    useEffect(()=>{
        dispatch(listTestRequest(TAB_TYPE[tabIndex], page));
    // eslint-disable-next-line
    },[])

    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={12}>
                    <PaperListTest square >
                        <TabsListTest
                            value={tabIndex}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                        >
                            <TabListTest label="All Test" />
                            <TabListTest label="Created Test"/>
                            <TabListTest label="Completed Test"   />
                           
                        </TabsListTest>
                    </PaperListTest>
                </Grid>

                <GridListTest item xs={12}>
                    <Grid container spacing={2}>
                        {
                            !isLoading && testsData?.map((test:any, index:number) => <Grid item xs={3} key={index}>
                                <TestItem
                                    test={test}
                                    changeIsOpenDialog={changeIsOpenDialog}
                                   />
                            </Grid>)
                        }
                        
                        {isLoading && range(8).map((numb) => (
                            <Grid item xs={3} key={numb}>
                                <TestItem isSkeletion />
                            </Grid>
                        ))}
                    </Grid>
                   {
                        isOpenDialog &&  <DetailTestItem isOpen={isOpenDialog} />
                   }
                </GridListTest>
                <Grid item xs={12} >
                    <ContainerPagin>
                        <PaginationLink totalPage={totalPage}/>
                    </ContainerPagin>
                   
                </Grid>
            </Grid>
        </Container>
    )
}
export default ListTest;






