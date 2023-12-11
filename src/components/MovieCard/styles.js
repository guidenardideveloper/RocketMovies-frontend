import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};

    border: none;
    border-radius: 16px;
    padding: 32px;

    margin-bottom: 24px;

    text-align: left;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        margin-bottom: 8px;
    }

    svg {
        font-size: 16px;
        margin-right: 6px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > .description {
        height: 50px;
        margin: 15px 0;

        p {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.GRAY_300};

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    > footer {
        width: 100%;
        display: flex;
        gap: 8px;
        margin-top: 24px;
    }
`;