import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 100px 0;
`;

export const RelatedPhotosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    @media (max-width: 990px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const RelatedTitle = styled.h3`
    font-size: 35px;
`;

export const ImageBox = styled.div``;
