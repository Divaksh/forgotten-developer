const settings = {
  "name": "divaksh.com",
  "state": {
    "frontity": {
      url: "https://divaksh.com",
      title: "Divaksh",
      description: "",
    }
  },
  "packages": [
    {
      "name": "forgotten-developer",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Java", "/category/programming/java/"],
            ["JavaScript", "/category/programming/javascript/"],
            ["C", "/category/programming/c/"],
            ["About Us", "/about-us/"],
			],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://api.divaksh.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
