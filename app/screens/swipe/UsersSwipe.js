/**
 * Created by usamaahmed on 5/8/17.
 */
import React , { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Font, AppLoading } from 'expo';
import { UserIndex } from '../../queries/queries';
import { graphql } from 'react-apollo';
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';
import { Card, ListItem, Button , Text } from 'react-native-elements'
import { imageRoute } from '../../Contstants';

class UsersSwipe extends Component {
    static propTypes = {
        jobs: React.PropTypes.array,
        data: React.PropTypes.shape({
            loading: React.PropTypes.bool,
            error: React.PropTypes.object,
            users: React.PropTypes.array,
        })
    }

    state = {
        fontLoaded: false,
    };
    static navigationOptions = () => {
        headerVisible: false
    }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        try {
            await Font.loadAsync({
                'open-sans-bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
                'Lato': require('../../../assets/fonts/Lato-Bold.ttf'),
            });
            this.setState({fontLoaded: true});
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { jobs } = this.props;
        console.log(jobs);
        if (this.state.fontLoaded) {
            return <Swiper showsButtons={false}>
                {
                    jobs.map(item => {
                        return (
                            <Card
                                key={item.id}
                                title={<Text>${item.jobtitle}</Text>}
                                image={{ uri : imageRoute + item.user_meta.logo}}>
                                <Text style={{marginBottom: 10}}>
                                    { `${item.snippet}` }
                                </Text>
                                <Button
                                    icon={{name: 'code'}}
                                    backgroundColor='#03A9F4'
                                    fontFamily='Lato'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='VIEW NOW'/>
                            </Card>
                        );
                    })
                }
            </Swiper>
        } else {
            return <AppLoading/>;
        }
    }
}

function mapStateToProps(state) {
    return state;
}
const ItemSwipeWithData = graphql(UserIndex)(UsersSwipe);

export default connect(mapStateToProps, actions)(ItemSwipeWithData);

var styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})