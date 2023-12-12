import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialised;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
        color: ${({ theme }) => theme.COLORS.WHITE}
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a:hover,
    button:hover {
        filter: brightness(0.9);
    }


    * {
    --sb-track-color: transparent;
    --sb-thumb-color: ${({ theme }) => theme.COLORS.PINK};
    --sb-size: 8px;

    scrollbar-color: ${({ theme }) => theme.COLORS.PINK};
    }

    *::-webkit-scrollbar {
    width: 8px; 
    }

    *::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px;
    }

    *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
    }
`;