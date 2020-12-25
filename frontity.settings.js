const settings = {
  name: "divakshcom",
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
            ["Git", "/git/"],
            ["Java", "/java/"],
            ["JavaScript", "/javascript/"],
            ["C", "/c/"],
            ["HTTP", "/http/"],
            ["About Us", "/about-us/"],
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
