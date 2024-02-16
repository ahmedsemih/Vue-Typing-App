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
        primary: "#f2e388",
        secondary: "#F7F1D6",
        background: "#415E31",
        text: "#7bba57",
      },
      shoko: {
        primary: "#67bcdb",
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
      metropolis: {
        primary: "#56C3B7",
        secondary: "#E4EDF1",
        background: "#0F1F2C",
        text: "#326984",
      },
      matrix: {
        primary: "#15FF00",
        secondary: "#D1FFCD",
        background: "#000000",
        text: "#006500",
      },
      future: {
        primary: "#F7F2EA",
        secondary: "#F7F2EA",
        background: "#2E1A47",
        text: "#C18FFF",
      },
      paper: {
        primary: "#444444",
        secondary: "#444444",
        background: "#EEEEEE",
        text: "#B2B2B2",
      },
      retro: {
        primary: "#1D1B17",
        secondary: "#1D1B17",
        background: "#DAD3C1",
        text: "#918B7D",
      },
      grass: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        background: "#00C18C",
        text: "#186544",
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
