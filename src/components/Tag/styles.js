import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) =>  theme.COLORS.BLACK_100};

    margin-right: 8px;
`;