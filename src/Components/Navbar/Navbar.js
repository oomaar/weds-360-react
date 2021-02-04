import React from 'react';
import { Navdiv, Rightdiv, Navlink, Logo, Leftdiv, Dropdown, DropdownLink, ResponsiveNav, ResponsiveButton } from "./styles/styledNavbar";

const Navbar = () => {
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
                    <img src="/images/responsive/burger.png" alt="burger toggle" />
                </ResponsiveButton>
            </ResponsiveNav>
        </>
    )
}

export default Navbar;
