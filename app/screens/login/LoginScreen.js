/**
 * Created by usamaahmed on 4/13/17.
 */
import React , { Component } from 'react';
import { View , Text, Button } from 'native-base';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propertiesActions from '../../redux/actions/propertiesActions';
import jobsActions from '../../redux/actions/jobActions';
import { Authenticate } from '../../queries/mutations';
import { setAuthToken } from '../../helpers/auth';
import * as actions from '../../redux/actions';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        this.props.mutate({
            variables: {
                email: "granville80@example.org",
                password: "secret"
            }
        }).then((r) => {
            this.props.setToken(r.data.authenticate);
            return this.props.navigation.navigate('Home');
        }).catch(e => console.log(e));
    }

    loginWithFb() {
        return this.props.loginWithFb()
            .then(r => !r ? this.props.navigation.goBack() : null)
            .catch(e => console.log(e));
    }

    render() {
        return (
            <View>
                <Button onPress={ () => this.login()} outlined bordered success>
                    <Text>login</Text>
                </Button>
                <Button onPress={ () => this.loginWithFb()} outlined bordered info>
                    <Text>login with FB</Text>
                </Button>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}
//function mapDispatchToProps(dispatch) {
//    return {
//        properties : bindActionCreators(propertiesActions,dispatch)
//    }
//}

const LoginScreenWithData = graphql(Authenticate)(LoginScreen);

export default connect(mapStateToProps, actions)(LoginScreenWithData);
