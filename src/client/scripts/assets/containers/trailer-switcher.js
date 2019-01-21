import React, { PureComponent } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import ScrollArrow from '../components/common/scroll-arrow';
import TrailerButton from '../components/player/trailer-button';

class TrailerSwitcher extends PureComponent {
    state = {
        buttonHolderLeft: 0
    }

    static getDerivedStateFromProps(props, state) {
        if (state.trailers !== props.trailers) {
            return ({
                trailers: props.trailers,
                buttonHolderLeft: 0,
                buttonHolderWidth: 168 * props.trailers.length
            });
        }
        return state;
    }

    trailerSwitcher = React.createRef();

    handleMovieSelection = (trailer) => {
        this.props.onSwitch(trailer);
    }

    handleRightClick = () => {
        const containerWidth = this.trailerSwitcher.current.clientWidth;
        const { buttonHolderWidth, buttonHolderLeft } = this.state;
        const remainingWidth = buttonHolderWidth + buttonHolderLeft;

        if (remainingWidth > containerWidth) {
            this.setState(() => {
                const hiddenWidth = remainingWidth - containerWidth;
                const widthToShift = hiddenWidth > 168 ? 168 : hiddenWidth;
                return ({
                    buttonHolderLeft: buttonHolderLeft - widthToShift
                });
            });
        }
    }

    handleLeftClick = () => {
        const { buttonHolderLeft } = this.state;

        if (buttonHolderLeft < 0) {
            this.setState(() => {
                const widthToShift = buttonHolderLeft < -168 ? -168 : buttonHolderLeft;
                return ({
                    buttonHolderLeft: buttonHolderLeft - widthToShift
                });
            });
        }
    }

    render() {
        return (
            <div>
                <div className="mlvp-arrows" style={{ display: 'block' }}>
                    <ScrollArrow
                        className="mlvp-arrow-left"
                        iconClassName="demo-icon icon-left-open"
                        arrowString="<"
                        onClick={this.handleLeftClick}
                    />
                    <ScrollArrow
                        className="mlvp-arrow-right"
                        iconClassName="demo-icon icon-right-open"
                        arrowString=">"
                        onClick={this.handleRightClick}
                    />
                </div>
                <div id="trailer-switcher" className="trailer-switcher" ref={this.trailerSwitcher}>
                    <div id="trailer-button-holder" className="trailer-button-holder" style={{ width: `${this.state.buttonHolderWidth}px`, position: 'relative', left: `${this.state.buttonHolderLeft}px` }}>
                        {
                            map(this.props.trailers, (trailer) => {
                                return (
                                    <TrailerButton
                                        key={trailer.key}
                                        className="trailer-button"
                                        onClick={this.handleMovieSelection}
                                        trailer={trailer}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

TrailerSwitcher.propTypes = {
    onSwitch: PropTypes.func.isRequired,
    trailers: PropTypes.arrayOf(PropTypes.any)
};

TrailerSwitcher.defaultProps = {
    trailers: []
};

export default TrailerSwitcher;
