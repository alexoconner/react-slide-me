# Slide Me - React Image Slider/Carousel

React component written in ES6 for creating slideshows/carousels with images or (later) html using CSS3 animations.

## Installation from npm
* `npm i -D react-slide-me`

## Development
* clone repository
* `npm i`    
* `npm run build` then run `npm start` to start live-server.

## Usage
See comments below:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Slider from 'react-slide-me';

// items can be either paths or objects in order to define alt and title yourself,
// otherwise title and alt will be the image path.
var items = [
    'image.jpg',
    'another-image.jpg',
    {
        url: 'another-other-image.jpg',
        alt: 'Alt Tag',
        title: 'Photo Title'
    }
];

var size = {
    width: 480,
    height: 320
}

// render slider, currently you can only use "image" as type.
/**
 * items: array of objects/strings
 * type: string
 * size: object {width, height}
 * animation: string (fade, moveHorizontal, moveVertical)
 * speed: number
 * easing: string (css3 easing)
 */
ReactDOM.render(
    <Slider
        items={ items }
        type="image"
        size={ size }
        animation="fade"
        speed={ 1000 }
        easing="ease"
    />,
    document.getElementById('Slider')
);

```
