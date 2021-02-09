import React, { useEffect, useState } from "react";
import { range } from "lodash";
import axios from "axios";
import {
    Container,
    PostContainer,
    Ulist,
    Item,
    PaginationContainer,
    PageNumBtn,
    NextAndPreviousBtn,
} from "./styles/styledPost";
import { Link } from "react-router-dom";

export default function Paginations() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPost();
    }, []);

    loading && <h2>Spinner...</h2>;

    const numberOfPages = range(1, 101);
    const [currentPage, setCurrentPage] = useState(1);
    const visibleCount = 9;

    const getSliceStart = () => {
        if (range(0, Math.ceil(visibleCount / 2)).includes(currentPage)) {
            return numberOfPages[0] - 1;
        } else if (
            range(
                numberOfPages.length - Math.floor(visibleCount / 2),
                numberOfPages.length + 1
            ).includes(currentPage)
        ) {
            return numberOfPages[numberOfPages.length - 1 - visibleCount];
        } else {
            return currentPage - Math.ceil(visibleCount / 2);
        }
    };

    const getSliceEnd = () => {
        if (
            range(
                numberOfPages.length - Math.floor(visibleCount / 2),
                numberOfPages.length + 1
            ).includes(currentPage)
        ) {
            return numberOfPages[numberOfPages.length - 1];
        } else if (range(0, Math.ceil(visibleCount / 2)).includes(currentPage)) {
            return visibleCount;
        } else {
            return currentPage + Math.floor(visibleCount / 2);
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <Container>
            <Container>
                <Ulist>
                    {currentPost.map(post => (
                        <Item key={post.id}>
                            <Link to={`/photo/${post.id}`}>
                                <img src={post.url} alt="" />
                            </Link>
                            <h6>{post.id}</h6>
                        </Item>
                    ))}
                </Ulist>
            </Container>

            <PaginationContainer>
                <NextAndPreviousBtn
                    onClick={() =>
                        setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
                    }>
                    ← Prev
                </NextAndPreviousBtn>
                {currentPage - 1 > Math.ceil(visibleCount / 2) && (
                    <PageNumBtn>
                        ...
                    </PageNumBtn>
                )}
                {numberOfPages.slice(getSliceStart(), getSliceEnd()).map((number) => (
                    <PageNumBtn
                        onClick={() => setCurrentPage(number)}
                        className={`${currentPage === number && 'active'}`}>
                        {number}
                    </PageNumBtn>
                ))}
                {currentPage <
                    numberOfPages[numberOfPages.length - 1] -
                    Math.floor(visibleCount / 2) && (
                        <PageNumBtn>
                            ...
                        </PageNumBtn>
                    )}
                <NextAndPreviousBtn
                    onClick={() =>
                        setCurrentPage(
                            currentPage < numberOfPages.length ? currentPage + 1 : currentPage
                        )
                    }>
                    Next →
                </NextAndPreviousBtn>
            </PaginationContainer>
        </Container>
    );
}
