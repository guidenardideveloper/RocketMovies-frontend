import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        margin: 48px 0;
    }

    svg {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > a {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.PINK};

        text-align: center;
        margin-top: 42px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;