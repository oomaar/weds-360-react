import React from 'react';
import {
    Container,
    HomeBox,
    TitleBox,
    Title,
    SubTitle,
    SearchBox,
    MainBox,
    ClearButton,
    ApplyButton,
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
                    <ClearButton>Clear</ClearButton>
                    <ApplyButton>Apply</ApplyButton>
                    <Input placeholder="Search" />
                </SearchBox>

                <MainBox>
                    <h1>I'm An H1</h1>
                </MainBox>
            </HomeBox>
        </Container>
    )
}

export default Home;
