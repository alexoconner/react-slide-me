
import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {

    static propTypes = {
        items: React.PropTypes.array,
        type: React.PropTypes.string,
        size: React.PropTypes.object,
        animation: React.PropTypes.string,
        speed: React.PropTypes.number
    };

    constructor ( props ) {
        super( props );

        this.sliderItems = [];
    }

    btnPrevious = () => {
        console.log('handle previous');
    };

    btnNext = () => {
        console.log('handle next');
        console.log(this.getPreviousItem());
        console.log(this.getCurrentItem());
        console.log(this.getNextItem());
    };

    previousSlide() {

    }

    nextSlide() {

    }

    /**
     * get current slider item
     * @return {object}
     */
    getCurrentItem() {
        for ( let i = 0; i < this.sliderItems.length; i++ ) {
            let item = this.sliderItems[i];

            if ( item.classList.contains('active') ) {
                return item;
            }
        }
    }

    /**
     * get previous slider item
     * @return {object}
     */
    getPreviousItem() {
        for ( let i = 0; i < this.sliderItems.length; i++ ) {
            let item = this.sliderItems[i];

            if ( item.classList.contains('active') ) {
                if ( i === 0 ) {
                    return this.sliderItems[this.sliderItems.length-1];
                }
                return this.sliderItems[i - 1];
            }
        }
    }

    /**
     * get next slider item
     * @return {object}
     */
    getNextItem() {
        for ( let i = 0; i < this.sliderItems.length; i++ ) {
            let item = this.sliderItems[i];

            if ( item.classList.contains('active') ) {
                if ( i === this.sliderItems.length - 1 ) {
                    return this.sliderItems[0];
                }
                return this.sliderItems[i + 1];
            }
        }
    }

    slideFade() {

    }

    componentDidMount() {
        const { animation } = this.props;
        this.sliderItems = document.querySelectorAll('.slider-item');

        for ( let i = 0; i < this.sliderItems.length; i++ ) {
            let item = this.sliderItems[i];
            switch ( animation ) {
                case 'fade':
                    if ( item.classList.contains('active') ) {
                        item.style.opacity = 1;
                    }
                    break;
                default:
            }
        }
    }

    /**
     * all the visual magic happens here
     * @return jsx/html
     */
    render() {

        const { items, size, type, speed, animation } = this.props;

        const styles = {
            container: {
                position: 'relative',
                display: 'block',
                width: size.width,
                height: size.height
            },
            containerItem: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: size.width,
                height: size.height,
                zIndex: 100,
                transition: 'all ' + speed + 'ms',
            },
            btnPrevious: {
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: '99999'
            },
            btnNext: {
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: '99999'
            }
        }

        switch ( animation ) {
            case 'fade':
                styles.containerItem.opacity = 0;
                break;
            default:
                styles.containerItem.opacity = 0;
        }

        let mapedItems = [];
        if ( type === 'image' ) {
            mapedItems = items.map( ( item, index ) => {
                let itemClass = 'slider-item';

                if ( index === 0 ) {
                    itemClass = itemClass + ' active';
                }

                if ( typeof item === 'string' ) {
                    return (
                        <div key={ index } ref="slider-item" style={ styles.containerItem } className={ itemClass }>
                            <img key={ index } src={ item } alt={ item } />
                        </div>
                    )
                }
                else if ( typeof item === 'object' ) {
                    return (
                        <div key={ index } ref="slider-item" style={ styles.containerItem } className={ itemClass }>
                            <img src={ item.url } alt={ item.alt } />
                        </div>
                    )
                }
            });
        }

        return (
            <div ref="slide-me-container" style={ styles.container }>
                <button style={ styles.btnPrevious } onClick={ this.btnPrevious }>previous</button>
                <button style={ styles.btnNext } onClick={ this.btnNext }>next</button>
                { mapedItems }
            </div>
        )
    }
}

export default Slider;

window.Slider = Slider;
