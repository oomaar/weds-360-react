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
    TextContainer,
    SocialContainer,
    Div,
    TitleBox,
    TitleLink,
    SubTitleLink,
} from "./styles/styledPhoto";

const Photo = ({ match }) => {
    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        // console.log("item", item);
    }

    useEffect(() => {
        fetchItem();
        // console.log("match", match);
    }, []);

    return (
        <>
            <Navbar />

            <div>
                <TitleBox>
                    <TitleLink href="/categories">Gallery</TitleLink>
                    <img src="/images/icons/chevron-right.png" alt="chevron" />
                    <SubTitleLink>Wedding Ideas</SubTitleLink>
                    <img src="/images/icons/chevron-right.png" alt="chevron" />
                    <SubTitleLink>IRRESISTIBLE APPETIZERS’ CORNER</SubTitleLink>
                </TitleBox>
                <Container>
                    <PhotoBox>
                        <PhotoContainer>
                            <img src={item.url} alt="" />
                        </PhotoContainer>
                        <TextContainer>
                            <Title>{item.title}</Title>
                            <SubTitle>Satisfy your guests with mouth-watering irresistible appetizers corner</SubTitle>
                            <Name>Umai</Name>
                            <SocialContainer>
                                <SocialIcon src="/images/social/facebook-sm.png" alt="facebook" />
                                <SocialIcon src="/images/social/twitter.png" alt="instagram" />
                            </SocialContainer>
                        </TextContainer>
                    </PhotoBox>
                    {/* Related Photos Container */}
                </Container>
            </div>

            <Jumbotron />
            <Footer />
        </>
    )
}

export default Photo;
