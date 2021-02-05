import styled from "styled-components/macro";

export const Container = styled.div`

    @media (max-width: 990px) {
        /* small screens */
        width: 500px;
    }

    @media (max-width: 400px) {
        /* mobile screens */
        width: 100%;
    }
`;

export const Ulist = styled.ul`
    list-style-type: none;
    display: flex;
`;
export const Item = styled.li`
    img {
        width: 230px;
        margin: 10px;

        @media (max-width: 1200px) {
            width: 200px;
        }

        @media (max-width: 990px) {
            /* small screens */
            width: 150px;
        }
    
        @media (max-width: 767px) {
            /* Ipad */
            width: 120px;
        }

        @media (max-width: 400px) {
            /* mobile screens */
            width: 80px;
        }
    }
`;

