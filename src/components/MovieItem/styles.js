import styled from "styled-components";


export const Container = styled.div`

    width: max-content;
    display: flex;
    align-items: center;
    
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none" };

    border-radius: 10px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    > button {
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 20px;

        padding: 16px;
    }

    > input {
        height: 56px;
        width: 100%;
        padding: 16px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`;