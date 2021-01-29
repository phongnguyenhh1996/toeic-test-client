import React,{useState , useEffect} from 'react';
import { Grid, Container } from "@material-ui/core";
import { PaperListTest, TabsListTest, TabListTest, ContainerPagin, PaginationTest, GridListTest } from './style';
import { TestItem } from '../Dashboard/components/TestItem';
import API from "../../utils/axios";

const ListTest: React.FC = () => {
    const [value, setValue] = useState(0);
    const [listTest,setListTest] = useState([]);
    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };
    // const classes = useStyles();
    const fetchAllListTest = async () =>{
        try{
            const respone =  await API.get('/public/tests/all');
            const allListTest =  respone.data.tests;
            setListTest(allListTest);
            console.log(listTest)
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchAllListTest();
    },[])
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
                            <TabListTest label="All Test" onClick={fetchAllListTest}   />
                            <TabListTest label="Created Test"/>
                            <TabListTest label="Completed Test"   />
                           
                        </TabsListTest>
                    </PaperListTest>
                </Grid>

                <GridListTest item xs={12}>
                    <Grid container spacing={2}>
                        {
                            listTest.map((test:any, index) => <Grid item xs={3} key={index}>
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






