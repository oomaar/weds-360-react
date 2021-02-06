import React from 'react';
import {
    Container,
    CategoriesBox,
    DropDown,
    Input,
    WeddingBox,
    WhiteBox
} from "./styles/styledCategories";

const Categories = () => {
    return (
        <Container>
            <CategoriesBox>
                <DropDown>
                    Find Categories Here
                </DropDown>
                <Input type="text" placeholder="SEARCH" />
            </CategoriesBox>

            <WeddingBox>
                Wedding Ideas
                <WhiteBox>
                    Wedding Ideas
                </WhiteBox>
            </WeddingBox>
        </Container>
    )
}

export default Categories;
