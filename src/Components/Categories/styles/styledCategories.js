import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
    border: 4px solid red;
    max-width: 1100px;
    max-height: 1000px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoriesBox = styled.div`
    border: 3px solid green;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const DropDown = styled.div`
    background-color: #fff;
    color: #000;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px;
    width: 45%;
    text-align: center;
    cursor: pointer;
    border: 1px solid black;
    margin: 5px auto;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 4.1px;

    img {
        width: 30px;
        margin: 0 20px;
    }
`;

export const Input = styled.input`
    background-color: #fff;
    color: #000;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px;
    width: 45%;
    border: 1px solid black;
    margin: 5px auto;
    height: 40px;
    letter-spacing: 4.1px;
`;

export const BlackBox = styled.div``;

const fade = keyframes`
    0% {
        opacity: 0;
    }

    25% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.5;
    }

    75% {
        opacity: 0.8;
    }

    100% {
        opacity: 1;
    }
`;

export const WhiteBox = styled.div`
    background-color: #fff;
    width: 85%;
    position: absolute;
    display: none;
    flex-direction: column;
    align-items: center;
    animation: ${fade} 500ms;

    img {
        margin: 70px;
        margin-top: 0;
    }
`;

export const WeddingBox = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
    url('/images/wedding-ideas.jpeg');
    background-position: center;
    background-size: cover;
    width: 350px;
    height: 230px;
    cursor: pointer;
    margin-left: 30px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        width: 60px;
    }

    &:hover {
        ${WhiteBox} {
            display: flex;
        }
    }
`;

export const WeddingBoxText = styled.h3`
    margin-bottom: 30px;
    color: #fff;
    font-size: 25px;
    font-weight: 700;

    &.dark {
        color: #111;
    }
`;