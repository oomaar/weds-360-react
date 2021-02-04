import React from 'react';
import { Navdiv, Rightdiv, Navlink, Logo, Leftdiv, Dropdown, DropdownLink } from "./styles/styledNavbar";

const Navbar = () => {
    return (
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


// <Header.Dropdown>
//     <Header.Group>
//         <Header.Picture src={user.photoURL} />
//         <Header.TextLink>{user.displayName}</Header.TextLink>
//     </Header.Group>
//     <Header.Group>
//         <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
//     </Header.Group>
// </Header.Dropdown>