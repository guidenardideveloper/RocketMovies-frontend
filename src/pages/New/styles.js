import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header" 
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`;

export const Form = styled.form`
    max-width: 1137px;
    height: 700px;
    margin: 40px auto;
    overflow-y: scroll;

    padding-right: 24px;
    padding-bottom: 24px;
    
    > header {
        margin: 24px 0 40px 0;

        h1 {
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
        }
    }

    > .inputsMovie {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 40px;
    }

    > .tagMakers {
        width: 100%;

        h2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            margin-bottom: 24px;
        }

        .editTags {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            padding: 16px;
            border-radius: 8px;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

            display: flex;
            align-items: center;
            gap: 24px;
        }
    }

    > .buttonActions {
        display: flex;
        align-items: center;
        justify-content: center;

        .saveMovie {
            width: 700px;
            margin: 50px 0;
        }
    }
`;