
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider.jsx';

var items = [
    'http://lorempixel.com/420/320/city/',
    'http://placehold.it/420x320/',
    {
        url: 'http://lorempixel.com/420/320/city/',
        alt: 'alt tag',
        title: 'image title'
    },
    'http://placehold.it/420x320/'
];

var size = {
    width: 420,
    height: 320
}

ReactDOM.render( <Slider items={ items } type="image" size={ size } animation="fade" speed={ 1000 } />, document.getElementById('Slider') );
