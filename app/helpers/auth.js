/**
 * Created by usamaahmed on 1/3/17.
 */
import React from 'react'
import { AsyncStorage } from 'react-native';

export function setAuthToken(token) {
    return AsyncStorage.setItem('app_token', token);
}

export function getAuthToken() {
    return AsyncStorage.getItem('app_token');
}
