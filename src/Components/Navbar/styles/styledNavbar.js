import styled from "styled-components";

export const Navdiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;

    @media (max-width: 1200px) {
        /* laptop */
    }

    @media (max-width: 990px) {
        /* small screens */
    }

    @media (max-width: 767px) {
        /* Ipad */
        display: none;
    }
`;

export const Rightdiv = styled.div`
     /* margin-left: auto; */
    display: flex;
    justify-content: space-around;
    align-self: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    flex: 0.4;
    padding: 10px;
`;

export const Leftdiv = styled.div`
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

export const ResponsiveNav = styled.div`
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
    background-color: transparent;
    cursor: pointer;
    border: none;

    img {
        width: 30px;
    }
`;