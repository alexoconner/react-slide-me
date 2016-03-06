
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider.jsx';

var items = [
    'sample-images/01.jpg',
    'sample-images/02.jpg',
    {
        url: 'sample-images/03.jpg',
        alt: 'New York Skyline',
        title: 'Photo of New York skyline taken in Brooklyn'
    },
    'sample-images/04.jpg',
    'sample-images/05.jpg'
];

var size = {
    width: 480,
    height: 320
}

ReactDOM.render( <Slider items={ items } type="image" size={ size } animation="fade" speed={ 1000 } />, document.getElementById('Slider') );
