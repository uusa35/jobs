/**
 * Created by usamaahmed on 4/24/17.
 */
import React , { Component } from 'react';
import { View, StyleSheet , Animated } from 'react-native';

export default class Ball extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: {x: 200, y: 500}
        }).start();
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball}>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    ball: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'pink'
    }
});