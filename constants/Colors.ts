/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,

    // Add your custom colors here
    PRIMARY_BLACK: "#1E1E1E",
    PRIMARY_WHITE: "#FFFFFF",
    PRIMARY_RED: "#FF0000",

    GRAY_100: "#F6F6F6",
    GRAY_200: "#E4E4E4",
    GRAY_300: "#CDCDCD",
    GRAY_400: "#BABABA",
    GRAY_500: "#8C8C8C",
    GRAY_600: "#767676",
    GRAY_700: "#57595B",
    GRAY_800: "#28292A",

    SUB_1: "#F1C40F",
    SUB_2: "#1C6D78",

    BG_DARK: "rgba(25, 25, 25, 0.60)",
  },
};
