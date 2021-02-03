import React from 'react';
import { Footerdiv, Leftdiv, Title, SocialIcon, Centerdiv, Copy, Rightdiv, Link } from "./styles/styledFooter";

const Footer = () => {
    return (
        <Footerdiv>
            <Leftdiv>
                <Title>Weds360</Title>
                <SocialIcon src="/images/social/facebook.png" />
                <SocialIcon src="/images/social/instagram.png" />
            </Leftdiv>
            <Centerdiv>
                <Copy>© Copyright <strong>Plus360.</strong> All Rights Reserved</Copy>
            </Centerdiv>
            <Rightdiv>
                <Link>Terms & Conditions</Link>
                <Link>Privacy Policy</Link>
            </Rightdiv>
        </Footerdiv>
    )
}

export default Footer;