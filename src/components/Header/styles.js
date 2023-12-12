import styled from "styled-components";

export const Container = styled.header`

    grid-area: header;

    width: 100%;
    height: 116px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

    display: flex;
    justify-content: space-between;
`;

export const Profile = styled.div`

    width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    > h1 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        width: 630px;
        padding: 19px 24px;
        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > div {
        display: flex;
        align-items: center;
        line-height: 24px;



        img {
            width: 64px;
            height: 64px;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
            border-radius: 50%;
            cursor: pointer;
        }

        div {
            display: flex;
            flex-direction: column;
            margin-right: 9px;

            strong {
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                color: ${({ theme }) => theme.COLORS.WHITE_100};
            }

            a {
                display: inline-block;
                width: max-content;
                align-self: end;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: ${({ theme }) => theme.COLORS.GRAY_200};
            }
        }
    }
`;