import React, { useEffect, useState } from 'react';
import { Footer, Jumbotron, Navbar } from '..';
import {
    Container,
    PhotoContainer,
    Title,
    SubTitle
} from "./styles/styledPhoto";

const Photo = ({ match }) => {
    useEffect(() => {
        fetchItem();
        // console.log("match", match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        // console.log("item", item);
    }

    return (
        <Container>
            <Navbar />
            <PhotoContainer>
                <img src={item.url} alt="" />
                <Title>{item.title}</Title>
                <SubTitle>Satisfy your guests with mouth-watering irresistible appetizers corner</SubTitle>
                {/* Social icons: Facebook, Twitter */}
            </PhotoContainer>
            {/* Related Photos Container */}
            <Jumbotron />
            <Footer />
        </Container>
    )
}

export default Photo;
