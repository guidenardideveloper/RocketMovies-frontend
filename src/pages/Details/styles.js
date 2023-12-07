import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header" 
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding-top: 40px;
    }
`;

export const Content = styled.div`
    max-width: 1113px;
    max-height: 581px;

    margin: 40px auto 0 auto;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    

    > div {
        display: flex;
        align-items: baseline;
        gap: 19px;

        margin-top: 24px;

        h1 {
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 20px;
        }
    }

    > .userCreated {

        display: flex;
        align-items: center;
        gap: 8px;

        margin-top: 24px;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
        }

        span {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
        }
    }

    > .tags {
        margin-top: 40px;
    }

    > .movieSummary {
        margin-top: 40px;

        display: flex;
        flex-direction: column;

        p {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
            text-align: justify;
            padding-right: 10px;
        }
    }
`;