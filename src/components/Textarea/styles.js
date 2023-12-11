import styled from "styled-components";


export const Container = styled.textarea`
    width: 100%;
    height: 274px;
    padding: 19px 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border: none;
    border-radius: 10px;

    outline: none;
    resize: none;

    margin-bottom: 40px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;