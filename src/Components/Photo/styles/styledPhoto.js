import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1100px;
    margin: 10px auto;
    /* border: 2px solid red; */

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

export const TitleBox = styled.div`
    max-width: 1100px;
    margin: 10px auto;
    display: flex;
    align-items: center;

    img {
        width: 20px;
        height: 10px;
    }

    @media (max-width: 1200px) {
        width: 90%;
    }

    @media (max-width: 990px) {
        /* small screens */
        width: 80%;
    }

    @media (max-width: 767px) {
        /* Ipad */
        width: 80%;
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

    @media (max-width: 990px) {
    /* Ipad */
    width: 90%;
}

@media (max-width: 767px) {
        /* Ipad */
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
        /* Ipad */
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h2`
    /* font-size: 35.1px; */
    font-weight: 700;
    line-height: 1.42;
    font-size: clamp(22px, 1vw, 35.1px);
    
`;

export const SubTitle = styled.p`
    /* font-size: 23px; */
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
    /* Test */
    margin-bottom: 30px;
    margin-right: auto; 
    /* Test */
    color: #337ab7;
    cursor: pointer;
`;


export const SocialContainer = styled.div``;


// @media (max-width: 1200px) {
//     /* laptop */
// }

// @media (max-width: 990px) {
//     /* small screens */
// }

// @media (max-width: 767px) {
//     /* Ipad */
//     display: none;
// }

// @media (max-width: 400px) {
//    /* Mobile */
//}