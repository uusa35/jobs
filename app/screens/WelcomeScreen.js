/**
 * Created by usamaahmed on 5/5/17.
 */
import React , { Component } from 'react';
import { View , Text } from 'native-base';

export default class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            < View >
                <Text>Welcome Screen</Text>
            </ View >
        );
    }
}