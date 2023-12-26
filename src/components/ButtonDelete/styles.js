import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;

    background-color: transparent;
    border: none;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
        font-size: 18px;
    }
`;