import React from 'react';
import { Navdiv, Rightdiv, Navlink, Logo, Leftdiv, Dropdown } from "./styles/styledNavbar";

const Navbar = () => {
    return (
        <Navdiv>
            <Rightdiv>
                <Navlink>360 Planner</Navlink>
                <Dropdown>
                    <Navlink>Check List</Navlink>
                    <Navlink>Budgeter</Navlink>
                    <Navlink>Registry List</Navlink>
                    <Navlink>Guest List</Navlink>
                    <Navlink>Wedding Website</Navlink>
                    <Navlink>Couple Website</Navlink>
                    <Navlink>More</Navlink>
                </Dropdown>
                <Navlink>Her</Navlink>
                <Navlink>Him</Navlink>
                <Navlink>The Wedding</Navlink>
            </Rightdiv>
            <Logo src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png" alt="weds 360" />
            <Leftdiv>
                <Navlink>Vendors</Navlink>
                <Navlink>Gallery</Navlink>
                <Navlink>Ideas & more</Navlink>
            </Leftdiv>
        </Navdiv>
    )
}

export default Navbar;
