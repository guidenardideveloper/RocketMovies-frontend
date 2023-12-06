import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK_100};
    padding: 16px 0;
    border: 0;
    border-radius: 16px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;