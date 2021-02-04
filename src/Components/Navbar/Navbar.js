import React, { useState } from 'react';
import {
    Navdiv,
    Rightdiv,
    Navlink,
    Logo,
    Leftdiv,
    Dropdown,
    DropdownLink,
    ResponsiveNav,
    ResponsiveButton,
    Popdiv,
    Section,
    Largediv,
    Text,
    SmallContainer,
    Smalldiv
} from "./styles/styledNavbar";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const setToggleShow = () => setToggle(state => !state);

    return (
        <>
            <Navdiv>
                <Rightdiv>
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
                </Rightdiv>
                <Logo src="/images/logo.png" alt="weds 360" />
                <Leftdiv>
                    <Navlink>Vendors</Navlink>
                    <Navlink>Gallery</Navlink>
                    <Navlink>Ideas & more</Navlink>
                </Leftdiv>
            </Navdiv>

            <ResponsiveNav>
                <Navlink>Link</Navlink>
                <Logo src="/images/logo.png" alt="weds 360" />
                <ResponsiveButton>
                    <img onClick={setToggleShow} src="/images/responsive/burger.png" alt="burger toggle" />
                </ResponsiveButton>
            </ResponsiveNav>

            {toggle && (
                <Popdiv>
                    <Section>
                        <Largediv>
                            <img src="/images/responsive/icons/360planner.png" alt="360 planner" />
                            <Text>360 planner</Text>
                        </Largediv>
                        <Largediv>
                            <img src="/images/responsive/icons/him.png" alt="Him" />
                            <Text>Him</Text>
                        </Largediv>

                        <SmallContainer>
                            <Smalldiv>
                                <img src="/images/responsive/icons/checklist.png" alt="Check list" />
                                <Text>Check list</Text>
                            </Smalldiv>

                            <Smalldiv>
                                <img src="/images/responsive/icons/guestlist.png" alt="Guest list" />
                                <Text>Guest list</Text>
                            </Smalldiv>
                        </SmallContainer>

                        <Largediv>
                            <img src="/images/responsive/icons/gallery.png" alt="Gallery" />
                            <Text>Gallery</Text>
                        </Largediv>
                    </Section>

                    <Section>
                        <Largediv>
                            <img src="/images/responsive/icons/forthewedding.png" alt="For The Wedding" />
                            <Text>For The Wedding</Text>
                        </Largediv>
                        <Largediv>
                            <img src="/images/responsive/icons/her.png" alt="Her" />
                            <Text>Her</Text>
                        </Largediv>

                        <SmallContainer>
                            <Smalldiv>
                                <img src="/images/responsive/icons/registrylist.png" alt="Registry list" />
                                <Text>Registry list</Text>
                            </Smalldiv>

                            <Smalldiv>
                                <img src="/images/responsive/icons/budgeter.png" alt="Budgeter" />
                                <Text>Budgeter</Text>
                            </Smalldiv>
                        </SmallContainer>

                        <Largediv>
                            <img src="/images/responsive/icons/ideasandmore.png" alt="Ideas & more" />
                            <Text>Ideas & more</Text>
                        </Largediv>
                    </Section>
                </Popdiv>
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