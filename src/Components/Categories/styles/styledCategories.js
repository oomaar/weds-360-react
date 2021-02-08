import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    max-height: 1100px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: clamp(97%, 10vw, 1100px);

    @media (max-width: 400px) {
        margin: 0;
    }
`;

export const CategoriesBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const DropDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(11px, 1vw, 15px);
    font-weight: 700;
    text-transform: uppercase;
    width: 45%;
    text-align: center;
    cursor: pointer;
    border: 1px solid black;
    margin: 5px auto;
    height: 45px;
    letter-spacing: 4.1px;

    img {
        width: clamp(20px, 1vw, 30px);
        margin: 0 20px;

        @media (max-width: 400px) {
            margin: 0;
        }
    }

    @media (max-width: 770px) {
        letter-spacing: 0px;
    }
`;

export const Input = styled.input`
    font-size: clamp(11px, 10vw, 15px);
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px;
    width: 45%;
    border: 1px solid black;
    margin: 5px auto;
    height: 45px;
    letter-spacing: 4.1px;

    @media (max-width: 770px) {
        letter-spacing: 3px;
    }
`;

const fade = keyframes`
    0% {
        opacity: 0;
    }

    20% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.5;
    }

    70% {
        opacity: 0.7;
    }

    100% {
        opacity: 1;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    height: 15vh;
    background: #111;
    width: 95%;
    margin-bottom: 20px;
    animation: ${fade} 500ms;

    &.hide {
        display: none;
        transition: transform 1s;
    }
`;

export const BlackBox = styled.div`
    background: #111;
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        border: 7px solid #232943;
        box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-thumb {
        background: #5b5b5b;
        border-radius: 30px;
    }

    img {
        width: clamp(30px, 10vw, 50px);
        margin: 10px;
    }
`;

export const WhiteBox = styled.div`
    display: none;
    background-color: #fff;
    width: 85%;
    position: absolute;
    flex-direction: column;
    align-items: center;
    transition: transform 1s;

    img {
        margin: 70px;
        margin-top: 0;
    }
`;

export const WeddingBox = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
    url('/images/wedding-ideas.jpeg') center;
    background-size: cover;
    width: 350px;
    height: 230px;
    cursor: pointer;
    margin: 20px auto 0 30px;
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
            animation: ${fade} 500ms;
        }
    }

    @media (max-width: 770px) {
            width: 80%;
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