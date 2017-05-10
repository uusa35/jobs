/**
 * Created by usamaahmed on 4/10/17.
 */
import { getAuthToken, setAuthToken } from '../../helpers/auth';
import { Facebook } from 'expo';

export const  enableLoading = () => {
    return {
        type: 'ENABLE_LOADING',
        isLoading: true
    }
};

export const disableLoading = () => {
    return {
        type: 'DISABLE_LOADING',
        isLoading: false
    }
};

export const setToken = (t) => async dispatch => {
    await setAuthToken(t);
    let token = await getAuthToken();
    if (token) {
        return dispatch(this.login(token));
    }
    return false;
};

export const loginWithFb = () => async dispatch => {
    let { type , token } = await Facebook.logInWithReadPermissionsAsync('1819402961719559', {
        permissions: ['public_profile']
    });
    if (type === 'cancel') {
        return false;
    }
    await setAuthToken(token).then(() => dispatch(this.login(token))).catch(e => console.log(e));
}

export const login = (token) => {
    return {
        type: 'LOGIN',
        token
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}


//export default propertiesActions;