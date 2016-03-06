
import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {

    static propTypes = {
        items: React.PropTypes.array,
        type: React.PropTypes.string,
        size: React.PropTypes.object
    };

    constructor ( props ) {
        super( props );
    }

    render() {

        const { items, size, type } = this.props;

        const container = {
            position: 'relative',
            display: 'block',
            width: size.width,
            height: size.height
        }

        const containerItem = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: size.width,
            height: size.height
        }

        const btnPrevious = {

        }

        const btnNext = {

        }

        let mapedItems = [];
        if ( type === 'image' ) {
            mapedItems = items.map( ( item, index ) => {
                if ( typeof item === 'string' ) {
                    return (
                        <div key={ index } style={ containerItem }>
                            <img key={ index } src={ item } alt={ item } />
                        </div>
                    )
                }
                else if ( typeof item === 'object' ) {
                    return (
                        <div key={ index } style={ containerItem }>
                            <img src={ item.url } alt={ item.alt } />
                        </div>
                    )
                }
            });
        }

        return (
            <div ref="slide-me-container" style={ container }>
                <button style={ btnPrevious }>previous</button>
                <button style={ btnNext }>next</button>
                { mapedItems }
            </div>
        )
    }
}

export default Slider;
