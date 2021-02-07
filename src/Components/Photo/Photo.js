import React, { useEffect, useState } from 'react';
import { Footer, Jumbotron, Navbar } from '..';
import {
    Container,
    PhotoContainer,
    Title,
    SubTitle,
    SocialIcon,
    Name,
    PhotoBox,
    TextContainer
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
        <>
            <Navbar />
            
            <Container>
                <PhotoBox>
                    <PhotoContainer>
                        <img src={item.url} alt="" />
                    </PhotoContainer>
                    <TextContainer>
                        <Title>{item.title}</Title>
                        <SubTitle>Satisfy your guests with mouth-watering irresistible appetizers corner</SubTitle>
                        {/* Social icons: Facebook, Twitter */}
                        <Name>Umai</Name>
                        <SocialIcon src="/images/social/facebook.png" alt="facebook" />
                        <SocialIcon src="/images/social/twitter.png" alt="instagram" />
                    </TextContainer>
                </PhotoBox>
                {/* Related Photos Container */}
            </Container>

            <Jumbotron />
            <Footer />
        </>
    )
}

export default Photo;
