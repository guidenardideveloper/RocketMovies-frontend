import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background-color: ${({ theme }) => theme.COLORS.PINK_100};

        display: flex;
        align-items: center;
        
        padding: 0 124px;
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: -90px auto 0;

    display: flex;
    flex-direction: column;

    > div:nth-child(4) {
        margin-top: 24px;
    }

    > button {
        margin-top: 24px;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BLACK_100};
        }
    }

`;