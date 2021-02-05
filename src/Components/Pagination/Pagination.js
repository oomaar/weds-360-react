import React from 'react';
import {
    Container,
    Ulist,
    Item
} from "./styles/styledPagination";

const Pagination = ({
    postsPerPage,
    posts,
    paginate,
    paginatePrev,
    paginateNext,
    indexOfLastPage,
    currentPage,
    prevPage,
    nextPage
}) => {
    const pageNumbers = [];

    let i = 1;
    while (i <= Math.ceil(posts.length / postsPerPage)) {
        pageNumbers.push(i);
        i++;
    }

    return (
        <Container>
            <Ulist>
                <button onClick={() => currentPage > 1 && paginatePrev(prevPage)}>← Previous</button>
                {pageNumbers.map(number => (
                    <Item key={number}>
                        <a onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </Item>
                ))}
                <button onClick={() => currentPage < indexOfLastPage && paginateNext(nextPage)}>Next →</button>
            </Ulist>
        </Container>
    )
}

export default Pagination;
