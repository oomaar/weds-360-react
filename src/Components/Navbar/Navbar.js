import React, { useState } from 'react';
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
    SmallBox
} from "./styles/styledNavbar";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const setToggleShow = () => setToggle(state => !state);

    return (
        <>
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
                <Logo src="/images/logo.png" alt="weds 360" />
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
                    <img onClick={setToggleShow} src="/images/responsive/burger.png" alt="burger toggle" />
                </ResponsiveButton>
            </ResponsiveBox>

            {toggle && (
                <PopBox>
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

// <div>
// <section>
//     <div>large</div>
//     <div>large</div>
//     <div>small</div>
//     <div>small</div>
//     <div>large</div>
// </section>
// <section>
//     <div>large</div>
//     <div>large</div>
//     <div>small</div>
//     <div>small</div>
//     <div>large</div>
// </section>
// </div>