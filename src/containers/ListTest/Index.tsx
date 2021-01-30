import React,{ useEffect, useState } from 'react';
import { Grid, Container } from "@material-ui/core";
import { PaperListTest, TabsListTest, TabListTest, ContainerPagin, PaginationTest, GridListTest } from './style';
import { TestItem } from '../Dashboard/components/TestItem';
import { useDispatch, useSelector } from 'react-redux';
import { listTestRequest } from '../../actions/list_Test';
import { usePrevious } from '../../utils/hooks';
import { range } from 'lodash';


const TAB_TYPE: any = {
    0: 'all',
    1: 'created',
    2: 'completed'
}
  
const ListTest: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const listTest = useSelector((state:any)=> state.listTest) 
    const isLoading = useSelector((state:any)=> state.listTest.loading) 
    const dispatch = useDispatch();
    const handleChange = (event: any, newValue: number) => {
        setTabIndex(newValue);
    }
    const prevTabIndex = usePrevious(tabIndex)
    const testsData = listTest[TAB_TYPE[tabIndex]];
    useEffect(()=>{
        if (tabIndex !== prevTabIndex) {
            if (!testsData) {
                dispatch(listTestRequest(TAB_TYPE[tabIndex]));
            }
        }
    },[prevTabIndex, tabIndex, testsData, dispatch])

    useEffect(()=>{
        dispatch(listTestRequest(TAB_TYPE[tabIndex]));
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
                                <TestItem title={test.name} author={test.author} />
                            </Grid>)
                        }
                        {isLoading && range(8).map((numb) => (
                            <Grid item xs={3} key={numb}>
                                <TestItem isSkeletion />
                            </Grid>
                        ))}
                    </Grid>
                </GridListTest>
                <Grid item xs={12} >
                    <ContainerPagin>
                        <PaginationTest count={10} variant="outlined" shape="rounded" />
                    </ContainerPagin>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ListTest;






