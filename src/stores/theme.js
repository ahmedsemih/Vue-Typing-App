import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentTheme: localStorage.getItem("theme") || "default",
    themes: {
      default: {
        primary: "#E2B714",
        secondary: "#D1D0C5",
        background: "#323437",
        text: "#909090",
      },
      onedark: {
        primary: "#61AFEF",
        secondary: "#98C379",
        background: "#2F343F",
        text: "#ECEFF4",
      },
      moonlight: {
        primary: "#C69F68",
        secondary: "#CCCCB5",
        background: "#191F28",
        text: "#4B5975",
      },
      froyo: {
        primary: "#7B7D7D",
        secondary: "#7B7D7D",
        background: "#E1DACB",
        text: "#B29C5E",
      },
      cupcakes: {
        primary: "#5ED5F3",
        secondary: "#0A282F",
        background: "#FFFFFF",
        text: "#D64090",
      },
      pulse: {
        primary: "#17B8BD",
        secondary: "#E5F4F4",
        background: "#181818",
        text: "#53565A",
      },
      hedge: {
        primary: "#6A994E",
        secondary: "#F7F1D6",
        background: "#415E31",
        text: "#EDE5B4",
      },
      shoko: {
        primary: "#81C4DD",
        secondary: "#3B4C58",
        background: "#CED7E0",
        text: "#7599B1",
      },
      darling: {
        primary: "#FFFFFF",
        secondary: "#332800",
        background: "#FEC8CD",
        text: "#A30000",
      },
      rose: {
        primary: "#D82934",
        secondary: "#E8E8E8",
        background: "#232323",
        text: "#808080",
      },
    },
  }),
  actions: {
    setTheme(theme) {
      this.currentTheme = theme;
      localStorage.setItem("theme", theme);
    },
  },
  getters: {
    themeProperties() {
      return this.themes[this.currentTheme];
    },
  },
});
