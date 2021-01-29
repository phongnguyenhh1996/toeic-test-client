import React,{ useState } from 'react';
import { Grid, Container } from "@material-ui/core";
import { PaperListTest, TabsListTest, TabListTest, ContainerPagin, PaginationTest, GridListTest } from './style';
import { TestItem } from '../Dashboard/components/TestItem';
import { useDispatch, useSelector } from 'react-redux';
import { listAllTestRequest } from '../../actions/list_Test';



  
const ListTest: React.FC = () => {
    const [value, setValue] = useState(0);
    const listTest = useSelector((state:any)=> state.listAllTestReducer.listTest)
    const dispatch = useDispatch();
    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    }
    const fetchListAllTest = () =>{
        dispatch(listAllTestRequest());
    }
    // useEffect(()=>{
    //     dispatch(listAllTestRequest());
    // },[])
    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={12}>
                    <PaperListTest square >
                        <TabsListTest
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                        >
                            <TabListTest label="All Test" onClick={fetchListAllTest}  />
                            <TabListTest label="Created Test"/>
                            <TabListTest label="Completed Test"   />
                           
                        </TabsListTest>
                    </PaperListTest>
                </Grid>

                <GridListTest item xs={12}>
                    <Grid container spacing={2}>
                        {
                            listTest.map((test:any, index:number) => <Grid item xs={3} key={index}>
                                <TestItem title={test.name} author={test.author} />
                            </Grid>)
                        }
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






