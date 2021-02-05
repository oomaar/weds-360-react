import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    margin: 10px auto;

    @media (max-width: 1200px) {
        width: 900px;
    }

    @media (max-width: 990px) {
        /* small screens */
        width: 850px;
    }

    @media (max-width: 767px) {
        /* Ipad */
        width: 90%;
        margin: auto;
        padding: 20px;
    }

    @media (max-width: 400px) {
        /* mobile screens */
    }
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 20px;
    }
`;

export const Title = styled.h2`
    color: #008174;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 20px;
    margin: 0 20px 0 0;
`;

export const SubTitle = styled.h3`
    text-transform: uppercase;
    font-size: 18px;
    margin: 0 20px;
`;

export const HomeBox = styled.div`
    margin: 50px auto;
    display: flex;

    @media (max-width: 767px) {
        /* Ipad */
        flex-direction: column;
    }
`;

export const SearchBox = styled.div`
    flex: 0.3;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        /* Ipad */
        width: 90%;
    }
`;

export const ButtonsBox = styled.div``;

export const ClearButton = styled.button`
    border: solid 1px #000;
    background-color: #fff;
    color: #000;
    width: 55px;
    height: 21px;
    font-size: 12px;
    cursor: pointer;
`;

export const ApplyButton = styled.button`
    border: solid 1px #000;
    background-color: #000;
    color: #fff;
    width: 55px;
    height: 21px;
    font-size: 12px;
    cursor: pointer;
    margin-left: 5px;
`;

export const Input = styled.input`
    display: inline-block;
    width: 100%;
    border: 1px solid #000;
    border-radius: 0;
    padding: 5px;
    margin-top: 30px;

    @media (max-width: 767px) {
        /* Ipad */
        margin-bottom: 30px;
    }
`;

export const MainBox = styled.div`
    /* border: 4px solid red; */
    flex: 0.7;
    height: 1100px;
    
    img {
        width: 1000px;
    }

    @media (max-width: 990px) {
        /* small screens */
        height: 100%;
    }

    @media (max-width: 767px) {
        /* Ipad */
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
