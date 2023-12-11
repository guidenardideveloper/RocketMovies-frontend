import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`;

export const Content = styled.div`
    width: 1137px;
    margin: 50px auto 0;

    > .addMovie {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        overflow-y: auto;

        h1 {
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        button {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 13px 32px;
            border: none;
            border-radius: 8px;

            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            background-color: ${({ theme }) => theme.COLORS.PINK};
            color: ${({ theme }) => theme.COLORS.BLACK_200};
        }
    }

    > .movieContainer {
        width: 1121px;
        height: 650px;
        margin: 40px auto 0;
        overflow-y: scroll;
        padding-right: 8px;

    }
`;