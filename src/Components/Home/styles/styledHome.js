import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    margin: 10px auto;
    width: clamp(80%, 20vw, 100%);
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 20px;
        height: 10px;
    }
`;

export const Title = styled.a`
    color: #008174;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin: 0 20px 0 0;
    text-decoration: none;
`;

export const SubTitle = styled.h3`
    text-transform: uppercase;
    font-size: 18px;
    margin: 0 20px;
`;

export const HomeBox = styled.div`
    margin: 50px auto;
    display: flex;

    @media (max-width: 770px) {
        flex-direction: column;
    }
`;

export const SearchBox = styled.div`
    flex: 0.3;
    display: flex;
    flex-direction: column;

    @media (max-width: 770px) {
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

    @media (max-width: 770px) {
        margin-bottom: 30px;
    }
`;

export const MainBox = styled.div`
    flex: 0.7;
    height: 1100px;
    
    img {
        width: 1000px;
        cursor: pointer;
    }

    @media (max-width: 990px) {
        height: 100%;
    }

    @media (max-width: 770px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
