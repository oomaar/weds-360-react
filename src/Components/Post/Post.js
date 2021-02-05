import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
    Container,
    Ulist,
    Item
} from "./styles/styledPost";

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        const fetchPost = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPosts(res.data.slice(0, 3));
        }

        fetchPost();
    }, []);
    // console.log(posts);
    return (
        <Container>
            <Ulist>
                {posts.map(post => (
                    <Item key={post.id}>
                        <img src={post.thumbnailUrl} alt={post.title} />
                        <h6>{post.title}</h6>
                    </Item>
                ))}
            </Ulist>
        </Container>
    )
}

export default Post;
