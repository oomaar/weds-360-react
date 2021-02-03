import styled from "styled-components";

export const Footerdiv = styled.div`
    background-color: #111;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 575px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
`;

export const Leftdiv = styled.div`
    margin-left: 20px;
    text-align: center;

    @media (max-width: 575px) {
        margin: 0;
    }
`;

export const Title = styled.h3`
    margin: 5px;
    font-size: 20px;
`;

export const SocialIcon = styled.img`
    width: 20px;
    margin: 10px;
    cursor: pointer;
`;

export const Centerdiv = styled.div`
    text-align: center;
`;

export const Copy = styled.h6`
    font-size: 10px;

    strong {
        color: #337ab7;
        cursor: pointer;
        margin: 2px;
    }
`;

export const Rightdiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 50px;

    @media (max-width: 575px) {
        margin: 0;
    }
`;

export const Link = styled.a`
    margin: 5px;
    cursor: pointer;
    font-size: 10px;

    @media (max-width: 575px) {
        margin-top: 2px;
        font-size: 8px;
    }
`;
