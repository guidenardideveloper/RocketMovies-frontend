import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        width: 100%;
        height: 55px;
        padding: 18px 16px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;