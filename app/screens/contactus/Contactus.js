/**
 * Created by usamaahmed on 4/6/17.
 */
import React , { Component } from 'react';
import { View , Text , StyleSheet } from 'react-native';


export default class Contactus extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>this is contact us</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});