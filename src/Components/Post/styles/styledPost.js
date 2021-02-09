import styled from "styled-components/macro";

export const Container = styled.div`
    @media (max-width: 990px) {
        width: 500px;
    }

    @media (max-width: 640px) {
        width: 100%;
    }

    @media (max-width: 400px) {
        width: 100%;
    }
`;

export const Ulist = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 990px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Item = styled.li`
    img {
        margin: 10px;
        width: clamp(80px, 20vw, 230px);
    }
    
    &.link__block {
        display: block;
    }
`;

// Buttons
export const PaginationContainer = styled.div`
    max-width: 540px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    &::before {
        content: "";
        height: 20vh;
    }
`;

export const NextAndPreviousBtn = styled.button`
        background-color: #fff;
        border: 1px solid #024d4c;
        font-size: clamp(12px, 1vw, 13px);
        width: 110px;
        height: 30px;
        cursor: pointer;
        color: #024d4c;

        &:hover {
            background-color: #e9e9f2;
        }
`;

export const PageNumBtn = styled.button`
        border: 1px solid #000;
        padding: 6px;
        text-decoration: none;
        color: #024d4c;
        width: 30px;
        cursor: pointer;
        background-color: #fff;
        font-size: clamp(12px, 1vw, 13px);

        &:hover {
            background-color: #e9e9f2;
            color: #000;
        }

        &.active {
            background-color: #024d4c;
            color: #fff;
        }
`;
