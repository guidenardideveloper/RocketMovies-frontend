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
    }
`;

export const Content = styled.div`
    
    width: 1137px;
    height: 550px;
    padding-right: 24px;
    margin: 40px auto 0 auto;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    > .buttonTextActions {
        width: 100%;

        display: flex;
        justify-content: space-between;
    }

    > .movieInfos {
        display: flex;
        align-items: baseline;

        margin-top: 24px;

        h2 {
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
            margin-right: 19px;
        }

        svg {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PINK};

            margin-right: 10px;
        }
    }

    > .infoUser {
        display: flex;
        align-items: center;
        gap: 20px;

        margin-top: 24px;

        .createdBy {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
            }

            span {
                text-align: justify;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: ${({ theme }) => theme.COLORS.WHITE_100};
            }
        }

        > .createdAt {
            display: flex;
            align-items: center;
            gap: 8px;

            svg {
                font-size: 20px;
                color: ${({ theme }) => theme.COLORS.PINK};
            }

            span {
                text-align: justify;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: ${({ theme }) => theme.COLORS.WHITE_100};
            }
        }
    }

    > .relatedTags {
        margin: 40px 0 40px 0;
    }

    > .movieDescription {
        p {
            text-align: justify;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

`;