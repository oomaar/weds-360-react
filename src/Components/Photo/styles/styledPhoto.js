import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    margin: 10px auto;

    border: 2px solid red;

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
`;

export const PhotoBox = styled.div``;

export const PhotoContainer = styled.div``;

export const TextContainer = styled.div``;

export const Title = styled.h2``;

export const SubTitle = styled.p``;

export const SocialIcon = styled.img``;

export const Name = styled.h3``;
