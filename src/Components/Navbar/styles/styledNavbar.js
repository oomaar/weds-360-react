import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;

    &.hide {
        display: none;
    }

    @media (max-width: 767px) {
        /* Ipad */
        display: none;
    }
`;

export const RightBox = styled.div`
     /* margin-left: auto; */
    display: flex;
    justify-content: space-around;
    align-self: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    flex: 0.4;
    padding: 10px;
`;

export const LeftBox = styled.div`
    /* margin-right: auto; */
    display: flex;
    justify-content: space-around;
    align-self: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    flex: 0.4;
    padding: 10px;
`;

export const DropdownLink = styled.a`
    padding: 15px;
    border-bottom: 1px solid #000;
    font-size: 12px;

    &:last-child {
        border: 0;
    }
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 31px;
    left: 0;
    text-align: center;
    width: 100px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px #000;

    ${DropdownLink} {
    cursor: pointer;
    }
`;

export const Navlink = styled.a`
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-family: lato,sans-serif;
    font-size: 12.4px;
    font-weight: 900;
    text-decoration: none;
    cursor: pointer;
    position: relative;

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1200px) {
        font-size: 9px;
    }

    @media (max-width: 990px) {
        margin: 5px 20px;
    }
`;

export const Logo = styled.img`
    width: 100px;
    margin: 20px;

    @media (max-width: 990px) {
        width: 80px;
}
`;

// Small Screens: Nav and Burger Button
export const ResponsiveBox = styled.div`
    display: none;

    ${Logo} {
        width: 50px;
    }

    @media (max-width: 767px) {
        display: flex;
        justify-content: space-around;
    }
`;

export const ResponsiveButton = styled.button`
    cursor: pointer;
    border: none;
    height: 0;
    align-self: center;
    margin-bottom: 30px;

    img {
        width: 30px;
    }
`;

// Pop up Nav bar onClick
const fade = keyframes`
    0% {
        opacity: 0;
        transform: scale3d(.75, .75, 1);
    }

    70% {
        opacity: 0;
        transform: scale3d(.75, .75, 1);
    }

    100% {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
`;

export const PopBox = styled.div`
    display: none;
    position: absolute;
    justify-content: space-between;
    background: url('/images/responsive/bg.jpg');
    background-size: cover;
    color: #fff;
    max-width: 767px;
    width: 100%;
    padding: 0;
    animation: ${fade} 500ms cubic-bezier(0.39, -1.05, 0.58, 1.95);
    animation-delay: -0.1s;
    transform-origin: left top;

    @media (max-width: 767px) {
        display: flex;
    }
`;

export const Section = styled.div`
    width: 50%;
    border: 1px solid white;
`;

export const LargeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 99%;
    border: 1px solid white;
    border-right: 0;
    height: 140px;
    padding: 10px;
    

    img {
        margin-top: 10px;
        height: 50px;
        cursor: pointer;
    }
`;

export const Text = styled.h5`
    margin: 0 0 20px 0;
    cursor: pointer;
`;

export const SmallContainer = styled.div`
    display: flex;
`;

export const SmallBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    border: 1px solid white;
    padding: 10px;

    img {
        width: 50px;
        cursor: pointer;
    }
`;

// Scrolling navbar
export const ScrollNav = styled.div`
    position: fixed;
    background-color: white;
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    ${Logo} {
        width: 60px;
        margin: 0 40px;
    }

    ${Navlink} {
        margin: 20px;
    }
    
    @media (max-width: 767px) {
         /* Ipad */
        display: none;
    }
`;