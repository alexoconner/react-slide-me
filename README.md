# Slide Me - React Image Slider/Carousel

React component written in ES6 for creating slideshows/carousels with images or (later) html using CSS3 animations.

`Note` This is still waaay under development. However, feel free to try it out though!

 ## Installation
 * clone repository
 * `npm install`
 * `npm run build` then open the ./lib directory in your browswer or run `npm start` to start live-server.

## Usage
See comments below:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// make sure the path to the slider.jsx is correct
import Slider from './path/to/slider.jsx';

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

// render slider, currently you can only use "image" as type and fade as animation type.
ReactDOM.render(
    <Slider
        items={ items }
        type="image"
        size={ size }
        animation="fade"
        speed={ 1000 }
    />,
    document.getElementById('Slider')
);

```
