import React, { useEffect, useState } from 'react';
import { selectShows, setShow } from "./showsSlice";
import { useSelector, useDispatch } from "react-redux";
import {
    Container,
    RightBox,
    LeftBox,
    DropdownLink,
    Dropdown,
    Navlink,
    Logo,
    ResponsiveBox,
    ResponsiveButton,
    PopBox,
    Section,
    LargeBox,
    Text,
    SmallContainer,
    SmallBox,
    ScrollNav,
    ScrollNavContainer
} from "./styles/styledNavbar";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, handleShow] = useState(false);

    const dispatch = useDispatch();
    const showing = useSelector(selectShows);

    const showDiv = () => {
        dispatch(setShow({ shows: true }));
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 10 ? handleShow(true) : handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <>
            {show && (
                <ScrollNavContainer>
                    <ScrollNav>
                        <Logo src="/images/logo.png" alt="weds 360" />
                        <Navlink>36 Planner</Navlink>
                        <Navlink>Her</Navlink>
                        <Navlink>Him</Navlink>
                        <Navlink>The Wedding</Navlink>
                        <Navlink>Vendors</Navlink>
                        <Navlink>Gallery</Navlink>
                        <Navlink>Ideas & more</Navlink>
                    </ScrollNav>
                </ScrollNavContainer>
            )}
            <Container>
                <RightBox>
                    <Navlink>
                        360 Planner
                                    <Dropdown>
                            <DropdownLink>Check List</DropdownLink>
                            <DropdownLink>Budgeter</DropdownLink>
                            <DropdownLink>Registry List</DropdownLink>
                            <DropdownLink>Guest List</DropdownLink>
                            <DropdownLink>Wedding Website</DropdownLink>
                            <DropdownLink>Couple Website</DropdownLink>
                            <DropdownLink>More</DropdownLink>
                        </Dropdown>
                    </Navlink>
                    <Navlink>Her</Navlink>
                    <Navlink>Him</Navlink>
                    <Navlink>The Wedding</Navlink>
                </RightBox>
                <Link to="/">
                    <Logo src="/images/logo.png" alt="weds 360" />
                </Link>
                <LeftBox>
                    <Navlink>Vendors</Navlink>
                    <Navlink>Gallery</Navlink>
                    <Navlink>Ideas & more</Navlink>
                </LeftBox>
            </Container>

            <ResponsiveBox>
                <Navlink>Link</Navlink>
                <Logo src="/images/logo.png" alt="weds 360" />
                <ResponsiveButton>
                    <img onClick={showDiv} src="/images/responsive/burger.png" alt="burger toggle" />
                </ResponsiveButton>
            </ResponsiveBox>

            {showing.shows && (
                <PopBox className={`${showing.shows && 'hide'}`}>
                    <Section>
                        <LargeBox>
                            <img src="/images/responsive/icons/360planner.png" alt="360 planner" />
                            <Text>360 planner</Text>
                        </LargeBox>
                        <LargeBox>
                            <img src="/images/responsive/icons/him.png" alt="Him" />
                            <Text>Him</Text>
                        </LargeBox>

                        <SmallContainer>
                            <SmallBox>
                                <img src="/images/responsive/icons/checklist.png" alt="Check list" />
                                <Text>Check list</Text>
                            </SmallBox>

                            <SmallBox>
                                <img src="/images/responsive/icons/guestlist.png" alt="Guest list" />
                                <Text>Guest list</Text>
                            </SmallBox>
                        </SmallContainer>

                        <LargeBox>
                            <img src="/images/responsive/icons/gallery.png" alt="Gallery" />
                            <Text>Gallery</Text>
                        </LargeBox>
                    </Section>

                    <Section>
                        <LargeBox>
                            <img src="/images/responsive/icons/forthewedding.png" alt="For The Wedding" />
                            <Text>For The Wedding</Text>
                        </LargeBox>
                        <LargeBox>
                            <img src="/images/responsive/icons/her.png" alt="Her" />
                            <Text>Her</Text>
                        </LargeBox>

                        <SmallContainer>
                            <SmallBox>
                                <img src="/images/responsive/icons/registrylist.png" alt="Registry list" />
                                <Text>Registry list</Text>
                            </SmallBox>

                            <SmallBox>
                                <img src="/images/responsive/icons/budgeter.png" alt="Budgeter" />
                                <Text>Budgeter</Text>
                            </SmallBox>
                        </SmallContainer>

                        <LargeBox>
                            <img src="/images/responsive/icons/ideasandmore.png" alt="Ideas & more" />
                            <Text>Ideas & more</Text>
                        </LargeBox>
                    </Section>
                </PopBox>
            )}
        </>
    )
}

export default Navbar;
