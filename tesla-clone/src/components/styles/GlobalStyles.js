import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* Variables */
:root {
    --color__light-grey: #393c41;
    --color__dark: rgba(23, 26, 32, 0.8);
}

/* Custom Styling */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
}

body {
    width: 100%;
    background-color: transparent;
    color: var(--color__light-grey);

}

/* #header {
    height: 50px;
} */

/* Animations */
@keyframes bounceDown {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(5px);
    }

    60% {
        transform: translateY(3px);
    }
}

`;

export default GlobalStyles;
