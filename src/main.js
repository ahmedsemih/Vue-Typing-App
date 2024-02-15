import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  SiVuedotjs,
  BiKeyboard,
  MdRestartalt,
  BiCodeSlash,
  BiPaletteFill,
  RiTimerFill,
  MdBarchart,
  BiCheckLg,
  FaMousePointer
} from "oh-vue-icons/icons";

import App from "./App.vue";
import router from "./router";
import clickOutside from "./directives/clickOutside";

addIcons(
  SiVuedotjs,
  BiKeyboard,
  MdRestartalt,
  BiCodeSlash,
  BiPaletteFill,
  RiTimerFill,
  MdBarchart,
  BiCheckLg,
  FaMousePointer
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("click-outside", clickOutside);

app.component("VIcon", OhVueIcon);

app.mount("#app");
