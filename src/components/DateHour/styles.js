import styled from "styled-components";

export const Container = styled.div`
    width: max-content;

    display: flex;
    align-items: center;
    gap: 8px;

    margin-left: 8px;

    svg {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    span {
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        text-align: justify;
    }
`;