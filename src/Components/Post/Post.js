import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
    Container,
    Ulist,
    Item
} from "./styles/styledPost";

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPosts(res.data.slice(0, 100));
            setLoading(false);
        }

        fetchPost();
    }, []);
    // console.log(posts);
    loading && <h2>Spinner</h2>;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination
    const pageNumbers = [];

    let i = 1;
    while (i <= Math.ceil(posts.length / postsPerPage)) {
        pageNumbers.push(i);
        i++;
    }

    const paginate = (number) => setCurrentPage(number); 

    return (
        <Container>
            <Ulist>
                {currentPost.map(post => (
                    <Item key={post.id}>
                        <img src={post.thumbnailUrl} alt={post.title} />
                        <h6>{post.id}</h6>
                    </Item>
                ))}
            </Ulist>

            <nav>
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href="!#">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </Container>
    )
}

export default Post;
