import styled from "styled-components";
import Dog from "../../Assets/login.jpg";

export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;

    :before {
        content: "";
        display: block;
        background: url(${Dog}) no-repeat center center;
        background-size: cover;
    }

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;

        .login::before {
            display: none;
        }
    }
`;
