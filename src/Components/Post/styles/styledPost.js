import styled from "styled-components/macro";

export const Container = styled.div`
    @media (max-width: 990px) {
        width: 500px;
    }

    @media (max-width: 400px) {
        width: 100%;
    }
`;

export const Ulist = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
`;
export const Item = styled.li`
    img {
        margin: 10px;
        width: clamp(80px, 10vw, 230px);
    }
    
    &.link__block {
        display: block;
    }
`;

