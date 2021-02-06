import React from 'react';
import { selectShows, setShow } from "../Navbar/showsSlice";
import { useSelector, useDispatch } from "react-redux";
import {
    Container,
    CategoriesBox,
    DropDown,
    Input,
    WeddingBox,
    WeddingBoxText,
    WhiteBox,
    BlackBox,
    SubContainer
} from "./styles/styledCategories";

const Categories = () => {
    const dispatch = useDispatch();
    const showing = useSelector(selectShows);

    const showDiv = () => {
        dispatch(setShow({ shows: true }));
    }

    return (
        <Container>
            <CategoriesBox>
                <DropDown onClick={showDiv}>
                    Find Categories Here
                    <img src="/images/icons/chevron-down.png" alt="chevron-down" />
                </DropDown>
                <Input type="text" placeholder="SEARCH" />
            </CategoriesBox>

            {!showing.shows && (
                <SubContainer className={`${showing.shows && 'hide'}`}>
                    <BlackBox>
                        <img src="/images/responsive/icons/360planner.png" alt="360 planner" />
                        <img src="/images/responsive/icons/him.png" alt="Him" />
                        <img src="/images/responsive/icons/checklist.png" alt="Check list" />
                        <img src="/images/responsive/icons/guestlist.png" alt="Guest list" />
                        <img src="/images/responsive/icons/gallery.png" alt="Gallery" />
                        <img src="/images/responsive/icons/forthewedding.png" alt="For The Wedding" />
                        <img src="/images/responsive/icons/her.png" alt="Her" />
                        <img src="/images/responsive/icons/registrylist.png" alt="Registry list" />
                        <img src="/images/responsive/icons/budgeter.png" alt="Budgeter" />
                        <img src="/images/responsive/icons/ideasandmore.png" alt="Ideas & more" />
                        <img src="/images/responsive/icons/360planner.png" alt="360 planner" />
                        <img src="/images/responsive/icons/him.png" alt="Him" />
                        <img src="/images/responsive/icons/checklist.png" alt="Check list" />
                        <img src="/images/responsive/icons/guestlist.png" alt="Guest list" />
                        <img src="/images/responsive/icons/gallery.png" alt="Gallery" />
                        <img src="/images/responsive/icons/forthewedding.png" alt="For The Wedding" />
                        <img src="/images/responsive/icons/her.png" alt="Her" />
                        <img src="/images/responsive/icons/registrylist.png" alt="Registry list" />
                        <img src="/images/responsive/icons/budgeter.png" alt="Budgeter" />
                        <img src="/images/responsive/icons/ideasandmore.png" alt="Ideas & more" />
                    </BlackBox>
                </SubContainer>
            )}

            <WeddingBox>
                <img src="/images/responsive/icons/her.png" alt="icon" />
                <WeddingBoxText>Wedding Ideas</WeddingBoxText>
                <WhiteBox>
                    <img src="/images/icons/home-icon.png" alt="home-icon" />
                    <WeddingBoxText className="dark">Wedding Ideas</WeddingBoxText>
                </WhiteBox>
            </WeddingBox>
        </Container>
    )
}

export default Categories;
