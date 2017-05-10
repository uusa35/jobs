import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View , Platform } from 'react-native';
import ApolloClient , { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import NavWithData from './app/Navigation';
import { initialState, graphRouteAndroid , graphRouteIOS  } from './app/Contstants'

let store = configureStore(initialState);
let graphRoute = Platform.OS === 'ios' ? graphRouteIOS : graphRouteAndroid;
const networkInterface = createNetworkInterface({uri: graphRoute});

//networkInterface.use([{
//    applyMiddleware: async (req, next) => {
//        if (!req.options.headers) {
//            req.options.headers = {};  // Create the header object if needed.
//        }
//        //const token = await AsyncStorage.get('token');
//        //req.options.headers.token = token || null;
//        next();
//    },
//}]);

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    networkInterface,
});

const App = () =>
    <ApolloProvider client={client}>
        <Provider store={store}>
            <NavWithData/>
        </Provider>
    </ApolloProvider>

Expo.registerRootComponent(App);