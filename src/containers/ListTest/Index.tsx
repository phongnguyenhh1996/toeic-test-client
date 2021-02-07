import React,{ useCallback, useEffect, useState } from 'react';
import { Grid, Container } from "@material-ui/core";
import { PaperListTest, TabsListTest, TabListTest, ContainerPagin, GridListTest } from './style';
import { TestItem } from '../Dashboard/components/TestItem';
import { useDispatch, useSelector } from 'react-redux';
import { listTestRequest } from '../../actions/list_Test';
import { usePrevious } from '../../utils/hooks';
import { range } from 'lodash';
import PaginationLink from './TestPagtion';
import { useHistory, useLocation } from 'react-router-dom';
import DetailTestItem from './DetailTestItem';
import { Test } from '../../utils/function';


const TAB_TYPE: any = [
    'all',
    'created',
    'completed'
]
const initiTestItemDetail:Test = {
    name: "",
    description: "",
    testPart: 0,
    testType: 0,
    answers: {},
    avatarSrc:"",
    author:"",
    viewCount:0,
    likes:0,
    correctAnswer:{},
    questions:{},
}
const ListTest: React.FC = () => {
    const [isOpenDialog,setIsOpenDialog] = useState(false);
    const [testItemDetail,settestItemDetail] = useState<Test>(initiTestItemDetail)
    const listTest = useSelector((state:any)=> state.listTest)
    const isLoading = useSelector((state:any)=> state.listTest.loading)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    
    
    const changeIsOpenDialog = (test: any) =>{
        settestItemDetail(test);
        setIsOpenDialog(true);
    }

    const closeDialog = () => {
        setIsOpenDialog(false);
    }
    
    const query = new URLSearchParams(location.search)
    const tabType = query.get('type') || '0'
    const prevTabType = usePrevious(tabType)
    const page = parseInt(query.get('page') || '1', 10);
    const prevPage = usePrevious(page)
    const testsObject = listTest[TAB_TYPE[tabType]]
    const testsData = testsObject?.tests
    const totalPage = testsObject?.totalPages
    
    
    useEffect(()=>{
        if ((tabType !== prevTabType && !testsData) || (page !== prevPage)) {
            dispatch(listTestRequest(TAB_TYPE[tabType], page));
        }
    },[prevTabType, tabType, testsData, dispatch, page, prevPage])

    useEffect(()=>{
        dispatch(listTestRequest(TAB_TYPE[tabType], page));
    // eslint-disable-next-line
    },[])

    useEffect(() => {
        if (!tabType) {
            history.replace('/list-test?type=0')
        }
    }, [tabType, history])

    const handleChangeTab = useCallback((e, index) =>{
        history.push(`/list-test?type=${index}`)
    }, [history])

    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={12}>
                    <PaperListTest square >
                        <TabsListTest
                            value={parseInt(tabType)}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChangeTab}
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
                        { isOpenDialog &&
                            <DetailTestItem
                                test={testItemDetail}
                                handleClose={closeDialog}
                                isOpen={isOpenDialog}
                            />}
                    </Grid>
                </GridListTest>
                <Grid item xs={12} >
                    <ContainerPagin>
                        {totalPage > 1 &&
                            <PaginationLink totalPage={totalPage}/>
                        }
                    </ContainerPagin>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ListTest;






