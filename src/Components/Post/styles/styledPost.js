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

