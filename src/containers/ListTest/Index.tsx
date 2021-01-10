import React from 'react';
import { Grid, Container } from "@material-ui/core";
import { PaperListTest, TabsListTest, TabListTest, ContainerPagin, PaginationTest, GridListTest } from './style';
import { TestItem } from '../Dashboard/components/TestItem';
import { range } from 'lodash';

const ListTest: React.FC = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };
    // const classes = useStyles();
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
                            aria-label="disabled tabs example"
                        >
                            <TabListTest label="All Test" />
                            <TabListTest label="Created Test" />
                            <TabListTest label="Completed Test" />
                        </TabsListTest>
                    </PaperListTest>
                </Grid>

                <GridListTest item xs={12}>
                    <Grid container spacing={2}>
                        {
                            range(0, 8).map((item, index) => <Grid item xs={3} key={index}>
                                <TestItem />
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






