import styled from "styled-components";

export const Navdiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
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
`;

export const Navlink = styled.a`
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

    &:hover {

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
