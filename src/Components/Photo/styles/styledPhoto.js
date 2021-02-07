import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    margin: 10px auto;

    @media (max-width: 1200px) {
        width: 900px;
    }

    @media (max-width: 990px) {
        width: 850px;
    } 

    @media (max-width: 767px) {
        width: 90%;
        margin: auto;
        padding: 20px;
    }
`;

export const TitleBox = styled.div`
    max-width: 1100px;
    margin: 10px;
    display: flex;
    align-items: center;
    width: clamp(80%, 2vw, 100%);

    img {
        width: 20px;
        height: 10px;
    }
`;
export const TitleLink = styled.h1`
    color: #008174;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin: 0 20px 0 0;
    text-decoration: none;
    font-size: clamp(18px, 1vw, 20px);
`;

export const SubTitleLink = styled.h1`
    text-transform: uppercase;
    font-size: 18px;
    margin: 0 20px;
    font-size: clamp(10px, 1vw, 18px);
`;

export const PhotoBox = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;

    @media (max-width: 990px) {
        width: 90%;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const PhotoContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 85vh;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px; 

    @media (max-width: 767px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h2`
    font-weight: 700;
    line-height: 1.42;
    font-size: clamp(22px, 3.7vh, 35.1px);
`;

export const SubTitle = styled.p`
    line-height: 1.42;
    font-size: clamp(18px, 2vw, 23px);
    margin: 25px 0;
`;

export const SocialIcon = styled.img`
    height: 34px;
    width: 34px;
    cursor: pointer;
`;

export const Name = styled.h3`
    font-size: clamp(18px, 2vw, 23px);
    margin: 0 auto 30px 0; 
    color: #337ab7;
    cursor: pointer;
`;

export const SocialContainer = styled.div``;