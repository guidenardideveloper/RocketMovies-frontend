import styled from "styled-components";


export const Container = styled.div`

    width: max-content;
    display: flex;
    align-items: center;
    border-radius: 10px;

    background-color: ${({ theme, $isnew }) => $isnew ? "none": `${theme.COLORS.BACKGROUND_200}`};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none" };

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