import { createStitches } from "@stitches/react";

export const { styled, keyframes, createTheme } = createStitches({
    media: {
        desktop: '(min-width: 992px)',
        mobile: '(max-width: 991px)',
    },
    theme: {
        colors: {
            black: "#262626",
            white: "#FFFFFF",
            gray: "#595959",
            lightGray: "#F5F5F5",
            mediumGray: "#D9D9D9",
            darkGray: "#8C8C8C",
            blue: "#004ABE",
            lightBlue: "#4B9DE4",
            green: "#52C41A",
            darkGreen: "#207F33",
            red: "#D91620",
            yellow: "#ffc700",
            orange: "#f58220"
        },
        fonts: {
            sans: "Arial, Helvetica, sans-serif",
        },
        fontSizes: {
            1: "14px",
            2: "16px",
            3: "21px",
            4: "24px",
        },
        space: {
            1: "4px",
            2: "8px",
            3: "16px",
            4: "24px",
            5: "32px",
            6: "64px",
            7: "128px",
        },
        sizes: {
            1: "4px",
            2: "8px",
            3: "16px",
            4: "32px",
            5: "64px",
            6: "128px",
        },
        radii: {
            1: "2px",
            2: "4px",
            3: "8px",
            round: "9999px",
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        zIndices: {},
        transitions: {}
    },
});