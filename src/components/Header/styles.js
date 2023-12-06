import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    height: 116px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

    display: flex;
    align-items: center;
`;

export const Profile = styled.div`
    width: 1123px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    

    margin: auto;

    h1 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    input {
        width: 630px;
        padding: 19px 24px;
        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > div {
        display: flex;
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
            margin-left: 8px;
            strong {
                font-size: 15px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                color: ${({ theme }) => theme.COLORS.WHITE_100};
            }

            span {
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: ${({ theme }) => theme.COLORS.GRAY_200};
                text-align: right;
            }
        }

        div {
            img {
                width: 64px;
                height: 64px;
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
                border-radius: 50%;
            }
        }
    }
`;