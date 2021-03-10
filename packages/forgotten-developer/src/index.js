import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

import prismProcessor from "./processors/prism";

const callbackHandler = {
  pattern: "/callback/",
  priority: 10,
  func: ({ state }) => {
    state.source.data["/callback/"].isCallback = true;
  },
};

const categoryHandler = {
  /**
   *  To use category without slug custom handler with
   *  different priority created.
   */
  name: "categoryOrPostType",
  priority: 19,
  pattern: "/(.*)?/:slug",
  func: async ({ route, params, state, libraries }) => {
    // 1. try with category.
    try {
      const category = libraries.source.handlers.find(
        (handler) => handler.name == "category"
      );
      await category.func({ route, params, state, libraries });
    } catch (e) {
      // It's not a category
      const postType = libraries.source.handlers.find(
        (handler) => handler.name == "post type"
      );
      await postType.func({ link: route, params, state, libraries });
    }
  },
};

const forgottenDeveloper = {
  name: "forgotten-developer",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      colors: {
        themeColor: "#0f0",
        bodyBg: "#11100f",
        formBg: "hsl(0, 0%, 8%) !important",
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      setThemeColorGreen: ({ state }) => {
        state.theme.colors.themeColor = "#0f0";
      },
      setThemeColorRed: ({ state }) => {
        state.theme.colors.themeColor = "red";
      },
      setThemeColorYellow: ({ state }) => {
        state.theme.colors.themeColor = "#dbf962";
      },
      setThemeColorWhite: ({ state }) => {
        state.theme.colors.themeColor = "white";
      },
      setThemeColorTeal: ({ state }) => {
        state.theme.colors.themeColor = "#0ff";
      },
      setThemeColorBlue: ({ state }) => {
        state.theme.colors.themeColor = "#1DBAFE";
      },
    },
  },
  libraries: {
    source: {
      // Add the handler to wp-source.
      handlers: [categoryHandler, callbackHandler],
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link, prismProcessor],
    },
  },
};

export default forgottenDeveloper;
