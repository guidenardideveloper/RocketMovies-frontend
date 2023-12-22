import styled from "styled-components";

export const Container = styled.div`
    width: max-content;

    display: flex;
    align-items: center;
    gap: 6px;

    margin-top: 8px;

    svg {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;