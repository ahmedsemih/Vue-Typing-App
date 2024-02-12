export default {
  beforeMount: (el, binding) => {
    el.handleClickOutside = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.handleClickOutside);
  },
  unmounted: function (el) {
    document.body.removeEventListener("click", el.handleClickOutside);
  },
};
