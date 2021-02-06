import React from 'react';
import {
    Container,
    CategoriesBox,
    DropDown,
    Input,
    WeddingBox,
    WeddingBoxText,
    WhiteBox
} from "./styles/styledCategories";

const Categories = () => {
    return (
        <Container>
            <CategoriesBox>
                <DropDown>
                    Find Categories Here
                    <img src="/images/icons/chevron-down.png" alt="chevron-down" />
                </DropDown>
                <Input type="text" placeholder="SEARCH" />
            </CategoriesBox>

            <WeddingBox>
                <img src="/images/responsive/icons/her.png" alt="icon" />
                <WeddingBoxText>Wedding Ideas</WeddingBoxText>
                <WhiteBox>
                    <img src="/images/icons/home-icon.png" alt="home-icon"/>
                    <WeddingBoxText className="dark">Wedding Ideas</WeddingBoxText>
                </WhiteBox>
                {/* <div>
                    <div>
                        <img src="/images/responsive/icons/her.png" alt="" />
                    </div>
                </div> */}
            </WeddingBox>
        </Container>
    )
}

export default Categories;
