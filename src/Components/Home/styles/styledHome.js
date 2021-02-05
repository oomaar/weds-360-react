import styled from "styled-components/macro";

export const Container = styled.div`
    /* border: 4px solid black; */
    max-width: 1100px;
    margin: 10px auto;
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
`;

export const SearchBox = styled.div`
    flex: 0.3;
`;

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
    width: 80%;
    border: 1px solid #000;
    border-radius: 0;
    padding: 5px;
    margin-top: 30px;
`;

export const MainBox = styled.div`
    /* border: 4px solid red; */
    flex: 0.7;
    height: 1100px;
    
    img {
        width: 1000px;
    }
`;
