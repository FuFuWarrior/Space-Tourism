# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![screenshot](./assets/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<picture id="commander-image" show="true">
  <source srcset="/assets/crew/image-douglas-hurley.webp" type="image/webp">
  <img src="/assets/crew/image-douglas-hurley.png" alt="Douglas Hurley">
</picture>

<picture show="false" id="space-port-image">
  <img src="./assets/technology/image-spaceport-landscape.jpg"
    srcset="./assets/technology/image-spaceport-landscape.jpg 560w, 
    ./assets/technology/image-spaceport-landscape.jpg 719w,
    ./assets/technology/image-spaceport-portrait.jpg 720w"
  alt="launch-vehicle"/>
</picture>
```
```css
@supports (backdrop-filter: blur(1rem)) {
    .primary-navigation{
        background: hsl(var(--clr-white) / .05);
        backdrop-filter: blur(1rem);
    }
}
```
**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.
.understanding ch unit, more understanding of grid, aspect-ratio

### Useful resources

- [Responsive images using 'srcset'](https://flaviocopes.com/html-responsive-images-srcset/) - This helped me in changing the images at section breakpoints. I really liked this pattern and will use it going forward.
- [Complete guide to grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - This is an amazing article which helped me finally understand grid. I'd recommend it to anyone still learning this concept.

## Author

**- Website - [Add your name here](https://www.your-site.com)**
- Frontend Mentor - [@FuFuWarrior](https://www.frontendmentor.io/profile/FuFuWarrior)
- Twitter - [@fufuwarrior](https://www.twitter.com/Fufuwarrior)

## Acknowledgments

I would like to thank Kevin Powell for his solution. There are some CSS i am just know about especially the clamp logical property, and also the use of some modern CSS. This was helpful in completing the technology page