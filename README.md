# Forgotten Developer - a terminal like theme for [Frontity](https://frontity.org/). 

> The starting point of all achievement is desire.

I always had the desire to create my personal blog with my own terminal like design. This new year, I’m incredibly happy to share my terminal like theme for Frontity.
The theme is amazingly simple but unique which is dedicated to developers and geeky folks. It is minimalist and very lightweight. You could use the theme package as a starting point to build your next programming website or blog.

**[View Demo](https://divaksh.com/)**

#### Table of Contents
<!-- toc -->

- [Quick install](#quick-install)
- [Advanced usage](#advanced-usage)
- [To do](#to-do)
- [Credits](#credits)


<!-- tocstop -->

## Quick install

 - Create a Frontity project named `developer-blog` with **Forgotten Developer theme**
 
```sh
npx frontity create --theme @divaksh/forgotten-developer developer-blog
```
 -  The CLI will run its part and once completed, run the project and have fun! 🎉
```sh
cd developer-blog && npx frontity dev
```

## Advanced usage

```sh
npm i @divaksh/forgotten-developer
```

Once installed it should be included in your `frontity.settings.js`.
The theme options can be specified in the `state.theme` property.

```javascript
{
  name: "@divaksh/forgotten-developer",
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["C", "/C/"],
        ["Git", "/git/"],
        ["Java", "/java/"],
        ["JavaScript", "/javascript/"]
      ],
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  }
},
```

## To Do
- Light and semi-dark mode
- Search feature
- Toggle to hide and show sidebar and footer

## Credits
- Frontity Team [ [1](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/), [2](https://docs.frontity.org/guides/understanding-mars-theme-1) ]
