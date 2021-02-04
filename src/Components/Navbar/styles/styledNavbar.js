import styled from "styled-components";

export const Navdiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media (max-width: 990px) {
        
    }
`;

export const Rightdiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 70px;
    align-self: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 46px;
    left: 0;
    text-align: center;
    width: 100px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px #000;
`;

export const DropdownLink = styled.a`
    margin: 10px 0;
    border-bottom: 1px solid #000;

    &:last-child {
        border: 0;
    }
`;

export const Navlink = styled.a`
    display: flex;
    align-items: center;
    position: relative;
    margin: 5px 40px;
    text-transform: uppercase;
    font-family: lato,sans-serif;
    font-size: 13.4px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    text-decoration: none;
    cursor: pointer;

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1200px) {
        font-size: 9px;
    }
`;

export const Logo = styled.img`
    width: 100px;
    margin: 20px;
`;

export const Leftdiv = styled.div`
    margin-right: auto;
    display: flex;
    align-items: center;
    height: 70px;
    align-self: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;
