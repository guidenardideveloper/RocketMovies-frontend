import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;

    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;