const settings = {
  name: "forgotten-developer",
  state: {
    frontity: {
      url: "https://divaksh.com",
      title: "Divaksh",
      description: "A retired developer back in action",
    },
    sitemap: {
      origin: "https://cdn.divaksh.com/post-sitemap.xml",
    },
  },
  packages: [
    {
      name: "forgotten-developer",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["C", "/c/"],
            ["Git", "/git/"],
            ["HTTP", "/http/"],
            ["Java", "/java/"],
            ["JavaScript", "/javascript/"],
            ["Callback", "/callback/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://cdn.divaksh.com/wp-json",
        },
      },
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-89697929-3",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/yoast",
    "@frontity/wp-comments",
  ],
};

export default settings;
