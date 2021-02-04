import React from 'react';
import { 
    Container,
    LeftBox,
    Title,
    SocialIcon,
    CenterBox,
    Copy,
    RightBox,
    Link
} from "./styles/styledFooter";

const Footer = () => {
    return (
        <Container>
            <LeftBox>
                <Title>Weds360</Title>
                <SocialIcon src="/images/social/facebook.png" />
                <SocialIcon src="/images/social/instagram.png" />
            </LeftBox>
            <CenterBox>
                <Copy>© Copyright <strong>Plus360.</strong> All Rights Reserved</Copy>
            </CenterBox>
            <RightBox>
                <Link>Terms & Conditions</Link>
                <Link>Privacy Policy</Link>
            </RightBox>
        </Container>
    )
}

export default Footer;