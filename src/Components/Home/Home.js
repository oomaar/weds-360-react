import React from 'react';
import {
    Container,
    HomeBox,
    TitleBox,
    Title,
    SubTitle,
    SearchBox,
    MainBox,
    Button,
    Input
} from "./styles/styledHome";

const Home = () => {
    return (
        <Container>
            <TitleBox>
                <Title>Gallery</Title>
                <img src="/images/icons/chevron-right.png" alt="chevron" />
                <SubTitle>Wedding Ideas</SubTitle>
            </TitleBox>

            <HomeBox>
                <SearchBox>
                    <Button>Clear</Button>
                    <Button>Apply</Button>
                    <Input placeholder="Search" />
                </SearchBox>

                <MainBox>
                    <img src="/images/logo.png" alt="For Testing" />
                </MainBox>
            </HomeBox>
        </Container>
    )
}

export default Home;
