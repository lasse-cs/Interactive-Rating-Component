# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Finished Screenshot](./screenshot.png)

### Links

- Solution URL: [Repo URL](https://github.com/lasse-cs/Interactive-Rating-Component)
- Live Site URL: [Live Site URL](https://lasse-cs.github.io/Interactive-Rating-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I tried to use reative units in this project. I learnt about CSS radial gradients.

```css
.rating-component {
  background: radial-gradient(circle at top, hsl(var(--dark-blue)), hsl(var(--very-dark-blue)));
}
```

I also learnt more about DOM manipulation methods such as the replaceChildrenMethod
```js
ratingComponent.replaceChildren(img, tag, textContainer);
```