
import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {

    static propTypes = {
        items: React.PropTypes.array,
        type: React.PropTypes.string,
        size: React.PropTypes.object,
        animation: React.PropTypes.string,
        speed: React.PropTypes.number,
        easing: React.PropTypes.string
    };

    static defaultProps = {
        animation: 'fade',
        speed: 1000,
        easing: 'linear'
    };

    constructor ( props ) {
        super( props );

        this.slider = null;
        this.sliderItems = [];
    }

    btnPrevious = () => {
        const { animation } = this.props;

        switch ( animation ) {
            case 'fade':
                this.slideFadePrevious();
                break;
            case 'moveHorizontal':
                this.slideMoveHorizontalPrevious();
                break;
            case 'moveVertical':
                this.slideMoveVerticalPrevious();
                break;
            default:
                this.slideFadePrevious();
        }
    };

    btnNext = () => {
        const { animation } = this.props;

        switch ( animation ) {
            case 'fade':
                this.slideFadeNext();
                break;
            case 'moveHorizontal':
                this.slideMoveHorizontalNext();
                break;
            case 'moveVertical':
                this.slideMoveVerticalNext();
                break;
            default:
                this.slideFadeNext();
        }
    };

    /**
     * fade slide previous
     */
    slideFadePrevious() {

        let currItem = this.getCurrentItem();
        let prevItem = this.getPreviousItem();

        // place previous slide above current slide
        prevItem.style.zIndex = parseInt( currItem.style.zIndex ) + 1;

        // fade out current slide while fading in next slide just by using css animations
        currItem.style.opacity = 0;
        prevItem.style.opacity = 1;

        // change active slide
        prevItem.classList.add('active');
        currItem.classList.remove('active');
    }

    /**
     * slide fade next
     */
    slideFadeNext() {

        let currItem = this.getCurrentItem();
        let nextItem = this.getNextItem();

        // place next slide above current slide
        nextItem.style.zIndex = parseInt( currItem.style.zIndex ) + 1;

        // fade out current slide while fading in next slide just by using css animations
        currItem.style.opacity = 0;
        nextItem.style.opacity = 1;

        // change active slide
        nextItem.classList.add('active');
        currItem.classList.remove('active');
    }

    /**
     * slide move horizontal previous
     */
    slideMoveHorizontalPrevious() {
        const { speed } = this.props;

        let currItem = this.getCurrentItem();
        let prevItem = this.getPreviousItem();

        prevItem.style.transition = 'none';
        prevItem.style.left = '-' + this.getSliderWidth() + 'px';

        window.setTimeout( () => {
            prevItem.style.transition = this.getSliderTransition();
            currItem.style.left = this.getSliderWidth() + 'px';
            prevItem.style.left = 0;

            prevItem.classList.add('active');
            currItem.classList.remove('active');
        }, 10);
    }

    /**
     * slide move horizontal next
     */
    slideMoveHorizontalNext() {
        const { speed } = this.props;

        let currItem = this.getCurrentItem();
        let nextItem = this.getNextItem();

        // place next slide next to current slide
        nextItem.style.transition = 'none';
        nextItem.style.left = this.getSliderWidth() + 'px';

        window.setTimeout( () => {
            nextItem.style.transition = this.getSliderTransition();
            currItem.style.left = '-' + this.getSliderWidth() + 'px';
            nextItem.style.left = 0;

            nextItem.classList.add('active');
            currItem.classList.remove('active');
        }, 10);
    }

    /**
     * slide move vertical previous
     */
    slideMoveVerticalPrevious() {
        const { speed } = this.props;

        let currItem = this.getCurrentItem();
        let prevItem = this.getPreviousItem();

        prevItem.style.transition = 'none';
        prevItem.style.top = '-' + this.getSliderHeight() + 'px';

        window.setTimeout( () => {
            prevItem.style.transition = this.getSliderTransition();
            currItem.style.top = this.getSliderHeight() + 'px';
            prevItem.style.top = 0;

            prevItem.classList.add('active');
            currItem.classList.remove('active');
        }, 10);
    }

    /**
     * slide move vertical next
     */
    slideMoveVerticalNext() {
        const { speed } = this.props;

        let currItem = this.getCurrentItem();
        let nextItem = this.getNextItem();

        // place next slide next to current slide
        nextItem.style.transition = 'none';
        nextItem.style.top = this.getSliderHeight() + 'px';

        window.setTimeout( () => {
            nextItem.style.transition = this.getSliderTransition();
            currItem.style.top = '-' + this.getSliderHeight() + 'px';
            nextItem.style.top = 0;

            nextItem.classList.add('active');
            currItem.classList.remove('active');
        }, 10);
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

    /**
     * get slider transition
     * @return {string}
     */
    getSliderTransition() {
        const { speed, easing } = this.props;
        return 'all ' + speed + 'ms ' + easing;
    }

    /**
     * get slider width
     * @return {number}
     */
    getSliderWidth() {
        return this.slider.clientWidth;
    }

    /**
     * get slider height
     * @return {number}
     */
    getSliderHeight() {
        return this.slider.clientHeight;
    }

    componentDidMount() {
        const { animation } = this.props;

        this.slider = this.refs['slide-me-container'];
        this.sliderItems = this.slider.querySelectorAll('.slider-item');

        for ( let i = 0; i < this.sliderItems.length; i++ ) {
            let item = this.sliderItems[i];

            if ( item.classList.contains('active') ) {
                switch ( animation ) {
                    case 'fade':
                        item.style.opacity = 1;
                        break;
                    case 'moveHorizontal':
                        item.style.left = 0;
                        break;
                    case 'moveVertical':
                        item.style.top = 0;
                        break;
                    default:
                        item.style.opacity = 1;
                }
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
                display: 'inline-block',
                width: size.width,
                height: size.height,
                overflow: 'hidden'
            },
            containerItem: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: size.width,
                height: size.height,
                zIndex: 100,
                transition: this.getSliderTransition(),
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
            case 'moveHorizontal':
                styles.containerItem.left = size.width;
                break;
            case 'moveVertical':
                styles.containerItem.top = size.height;
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
            <div ref="slide-me-container" className={ this.uniqueSliderID } style={ styles.container }>
                <button style={ styles.btnPrevious } onClick={ this.btnPrevious }>previous</button>
                <button style={ styles.btnNext } onClick={ this.btnNext }>next</button>
                { mapedItems }
            </div>
        )
    }
}

export default Slider;
