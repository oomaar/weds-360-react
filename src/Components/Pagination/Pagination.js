import React from 'react';
import {
    Container,
    Ulist,
    Item
} from "./styles/styledPagination";

const Pagination = ({ postsPerPage, posts, paginate }) => {
    const pageNumbers = [];

    let i = 1;
    while (i <= Math.ceil(posts.length / postsPerPage)) {
        pageNumbers.push(i);
        i++;
    }

    return (
        <Container>
            <Ulist>
                {pageNumbers.map(number => (
                    <Item key={number}>
                        <a onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </Item>
                ))}
            </Ulist>
        </Container>
    )
}

export default Pagination;
