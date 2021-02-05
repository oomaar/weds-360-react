import styled from "styled-components/macro";

export const Container = styled.div`
    /* border: 4px solid red; */
    max-width: 540px;
    margin-top: 100px;

    @media (max-width: 990px) {
        /* small screens */
    }
`;

export const Ulist = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #024d4c;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin: auto;
    
    button {
        padding: 7px;
        background-color: #fff;
        border: 1px solid #024d4c;
        font-size: 13px;
        width: 110px;
        cursor: pointer;
        color: #024d4c;

        @media (max-width: 990px) {
            /* small screens */
            width: 80px;
            height: 20px;
            font-size: 11px;
            display: flex;
            align-items: center;
        }

        @media (max-width: 400px) {
            width: 70px;
        }
    }

    @media (max-width: 990px) {
        /* mobile screens */
        border: none;
    }
`;

export const Item = styled.li`
    @media (max-width: 990px) {
        /* small screens */
        font-size: 10px;
    }

    a {
        border: 1px solid #000;
        padding: 5px;
        text-decoration: none;
        color: #000;
        color: #024d4c;
        width: 30px;

        &:hover {
            background-color: #024d4c;
            color: #fff;
        }
    }
`;