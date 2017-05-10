/**
 * Created by usamaahmed on 5/4/17.
 */
import React , { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements'
import { Spinner } from 'native-base';
//import jobActions from '../../redux/actions/jobActions';
import * as actions from '../../redux/actions';

class HomeMapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapLoaded: false,
            region: {
                longitude: -122,
                latitude: 37,
                longitudeDelta: 0.04,
                latitudeDelta: 0.09,
            }
        }
    }

    static navigationOptions = {
        headerVisible: true
    }

    componentDidMount() {
        this.setState({mapLoaded: true});
    }


    onRegionChangeComplete = (region) => {
        this.setState({region});
    }

    onBtnPress = async () => {
        try {
            await this.props.enableLoading();
            let jobs = await this.props.fetchJobs(this.state.region, () => {
                this.props.disableLoading();
                this.props.navigation.navigate('UsersSwipe', {jobs: jobs});
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        console.log('props from HomeMapScreen');
        console.log(this.props);
        if (!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1 , justifyContent : 'center' }}>
                    <Spinner/>
                </View>
            )
        }
        if (this.props.properties.isLoading) {
            return (
                <View style={{ flex : 1, justifyContent : 'center'}}>
                    <Spinner/>
                </View>
            );
        }
        return (
            <View style={{ flex : 1, justifyContent : 'center'}}>
                <MapView
                    style={{flex: 1}}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.btnContainer}>
                    <Button
                        raised
                        iconRight
                        icon={{name: 'search'}}
                        title='search jobs here'
                        onPress={this.onBtnPress}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        left: 0
    }
});

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, actions)(HomeMapScreen);

