import React from 'react';
import { Post } from '..';
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
                    <Input type="text" placeholder="Search" />
                </SearchBox>

                <MainBox>
                <Post />
                <Post />
                <Post />
                </MainBox>
            </HomeBox>
        </Container>
    )
}

export default Home;
