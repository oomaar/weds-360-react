import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
    Container,
    Ulist,
    Item,
} from "./styles/styledPost";
import { Pagination } from '..';
import { Link } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPosts(res.data.slice(0, 40));
            setLoading(false);
        }

        fetchPost();
    }, []);
    // console.log(posts);
    loading && <h2>Spinner</h2>;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    const indexOfLastPage = Math.ceil(posts.length / postsPerPage) - 1;

    let prevPage = currentPage - 1;
    let nextPage = currentPage + 1;

    // Pagination
    const paginate = (number) => setCurrentPage(number);
    const paginatePrev = (number) => setCurrentPage(number);
    const paginateNext = (number) => setCurrentPage(number);

    return (
        <Container>
            <Ulist>
                {currentPost.map(post => (
                    <Item key={post.id}>
                        <Link to={`/photo/${post.id}`}>
                            <img src={post.url} alt="" />
                            <h6>{post.id}</h6>
                        </Link>
                    </Item>
                ))}
            </Ulist>
            <Ulist>
                {currentPost.map(post => (
                    <Item key={post.id}>
                        <Link to={`/photo/${post.id}`}>
                            <img src={post.thumbnailUrl} alt={post.title} />
                            <h6>{post.id}</h6>
                        </Link>
                    </Item>
                ))}
            </Ulist>
            <Ulist>
                {currentPost.map(post => (
                    <Item key={post.id}>
                        <Link to={`/photo/${post.id}`}>
                            <img src={post.thumbnailUrl} alt={post.title} />
                            <h6>{post.id}</h6>
                        </Link>
                    </Item>
                ))}
            </Ulist>

            <Pagination
                postsPerPage={postsPerPage}
                posts={posts}
                paginate={paginate}
                paginatePrev={paginatePrev}
                paginateNext={paginateNext}
                indexOfLastPage={indexOfLastPage}
                currentPage={currentPage}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export default Post;
