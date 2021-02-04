import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1100px;
    text-align: center;
    padding: 5px;
`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 900;
    align-self: center;
    max-width: 1000px;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        width: 700px;
    }

    @media (max-width: 750px) {
        font-size: 20px;
        width: 80%;
    }

    @media (max-width: 400px) {
        width: 90%;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    @media (max-width: 400px) {
        align-items: center;
    }
`;

export const Item = styled.div`
    display: flex;
    max-width: 350px;
    margin: 30px;

    @media (max-width: 770px) {
        width: 100%;
    }
`;

export const Pane = styled.div`
    max-width: 320px;
    max-height: 230px;
    text-align: left;
    padding: 10px;
`;

export const Icon = styled.img`
    width: 60px;
    margin: 10px;
    margin-top: 50%;
`;

export const ItemTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 7px;
    font-size: 18px;
    font-weight: 900;
    line-height: 1.39;
    letter-spacing: .7px;
`;

export const ItemText = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: .5px;
    text-align: left;
`;

export const ItemLink = styled.a`
    color: #024d4c;
    display: block;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: .5px;
    text-align: left;
`;