import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import {PaginationTest} from './style';
import PaginationItem from '@material-ui/lab/PaginationItem';

interface PaginationProps {
    totalPage: number
}

const PaginationLink: React.FC<PaginationProps> = ({totalPage}) => {
    const location = useLocation()
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const typeTest = query.get('type');

    return (
        <PaginationTest
            page={page}
            count={totalPage}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/list-test?type=${typeTest}&page=${item.page}`}
                    {...item}
                />
            )}
        />
    );
}

export default PaginationLink
