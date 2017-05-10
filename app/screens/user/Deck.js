/**
 * Created by usamaahmed on 4/25/17.
 */
import React , { Component } from 'react';
import { View , Text , Animated , PanResponder , Dimensions , StyleSheet , LayoutAnimation , UIManager } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const swipHold = screenWidth * 0.25;
export default class Deck extends Component {

    static defaultProps = {
        onSwipeRight: () => {
        },
        onSwipLeft: () => {
        }
    }

    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({x: gesture.dx, y: gesture.dy})
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > swipHold) {
                    this.forceSwipe('right');
                } else if (gesture.dx < -swipHold) {
                    this.forceSwipe('left');
                } else {
                    this.resetPosition();
                }
            }
        });
        this.state = {panResponder, position, index: 0};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.setState({index: 0});
        }
    }

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExpermintal && UIManager.setLayoutAnimationEnabledExpermintal(true);
        LayoutAnimation.spring();
    }

    forceSwipe(direction) {
        Animated.timing(this.state.position, {
            toValue: {x: (direction === 'right') ? screenWidth * 5.25 : -screenWidth * 5.25, y: 0},
            duration: 250
        }).start(() => {
            this.onSwipeComplete(direction);
        });
    }

    onSwipeComplete(direction) {
        const { onSwipeRight , onSwipLeft , data } = this.props;
        const item = data[this.state.index];
        console.log(item);
        direction === 'right' ? onSwipeRight(item) : onSwipLeft(item);
        this.setState({index: this.state.index + 1});
        this.state.position.setValue({x: 0, y: 0});
    }

    onSwipeRight() {
        console.log('from inside swip right');
    }

    onSwipLeft() {
        console.log('from inside swipe left');
    }

    getLayoutStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-screenWidth * 1.5, 0, screenWidth * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        });
        return ({
            ...position.getLayout(),
            transform: [{rotate}]

        })
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: {x: 0, y: 0}
        }).start();
    }

    renderElements() {
        if (this.state.index >= this.props.data.length) {
            return this.props.renderNoCards();
        }
        return this.props.data.map((item, i) => {
            if (i < this.state.index) {
                return null
            }
            if (i === this.state.index) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[this.getLayoutStyle(), styles.cardStyle]}
                        {...this.state.panResponder.panHandlers}>
                        {this.props.renderElement(item)}
                    </Animated.View>
                );
            }

            return (
                <Animated.View style={[styles.cardStyle, { top : 2 * (i-this.state.index)}]} key={item.id}>
                    {this.props.renderElement(item)}
                </Animated.View>
            );
        }).reverse();
    }

    render() {
        return (
            <View>
                { this.renderElements() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        position: 'absolute',
        width: screenWidth,

    }
});