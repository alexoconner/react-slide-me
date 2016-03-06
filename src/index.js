
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider.jsx';

var items = [
    'http://placehold.it/420x320',
    'http://placehold.it/420x320/',
    {
        url: 'http://placehold.it/420x320/',
        alt: 'alt tag',
        title: 'image title'
    },
];

var size = {
    width: 420,
    height: 320
}

ReactDOM.render( <Slider items={ items } type="image" size={ size } animation="fade" speed={ 1000 } />, document.getElementById('Slider') );
