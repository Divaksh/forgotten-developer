const settings = {
  name: "forgotten-developer",
  state: {
    frontity: {
      url: "https://divaksh.com",
      title: "Divaksh",
      description: "A retired developer back in action",
    },
    sitemap: {
      origin: "https://api.divaksh.com/post-sitemap.xml"
    }
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
          api: "https://api.divaksh.com/wp-json",
        },
      },
    },
    {
      name: "@frontity/google-analytics",
      state: {
          googleAnalytics: {
              trackingId: 'G-DSQ1D0P3NL'
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
