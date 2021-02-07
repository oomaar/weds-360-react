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
    ButtonsBox,
    ClearButton,
    ApplyButton,
    Input
} from "./styles/styledHome";

const Home = () => {
    return (
        <Container>
            <TitleBox>
                <Title href="/categories">Gallery</Title>
                <img src="/images/icons/chevron-right.png" alt="chevron" />
                <SubTitle>Wedding Ideas</SubTitle>
            </TitleBox>

            <HomeBox>
                <SearchBox>
                    <ButtonsBox>
                        <ClearButton>Clear</ClearButton>
                        <ApplyButton>Apply</ApplyButton>
                    </ButtonsBox>
                    <Input type="text" placeholder="Search" />
                </SearchBox>

                <MainBox>
                    <Post />
                </MainBox>
            </HomeBox>
        </Container>
    )
}

export default Home;
