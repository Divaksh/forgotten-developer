import Root from "./Root";

export default {
  name: "terminal-black",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isMenuOpen: false,
    },
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
    },
  },
};
