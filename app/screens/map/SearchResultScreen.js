/**
 * Created by usamaahmed on 5/4/17.
 */
import React , { Component } from 'react';
import { View, StyleSheet, ActivityIndicator , Text } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements'
//import jobActions from '../../redux/actions/jobActions';
import * as actions from '../../redux/actions';

class SearchResultScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log('props from SearchResultScreen');
        console.log(this.props);
        return (
            <View style={{ flex : 1, justifyContent : 'center'}}>
                <Text>From Result Search Screen</Text>
            </View>

        );
    }
}

function mapStateTorProps(state) {
    return state;
}
export default connect(mapStateTorProps, actions)(SearchResultScreen);

