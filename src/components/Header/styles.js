import styled from "styled-components";

export const Container = styled.header`

    grid-area: header;

    width: 100%;
    height: 116px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

    display: flex;
    justify-content: space-between;
`;

export const Brand = styled.div`
    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const SearchMovie = styled.div`
    width: 630px;
`;

export const Profile = styled.div`

    width: 1135px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

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