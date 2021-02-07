import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
    RelatedPhotosContainer,
    RelatedTitle,
    ImageBox,
    Container
} from "./styles/styledRealatedPhotos";

const RelatedPhotos = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPosts(res.data.slice(0, 8));
        }

        fetchPost();
    }, []);

    return (
        <Container>
            <RelatedTitle>Related Photos</RelatedTitle>
            <RelatedPhotosContainer>
                {posts.map(post => (
                    <ImageBox key={post.id}>
                        <img src={post.thumbnailUrl} alt="" />
                    </ImageBox>
                ))}
            </RelatedPhotosContainer>
        </Container>
    )
}

export default RelatedPhotos;
