/**
 * Created by usamaahmed on 4/10/17.
 */

let propertiesReducers = function(properties = {}, action) {
    switch (action.type) {
        case 'ENABLE_LOADING' :
            return Object.assign({}, properties, {
                isLoading: true,
            });

        case 'DISABLE_LOADING' :
            return Object.assign({}, properties, {
                isLoading: false
            });

        case  'LOGIN' :
            console.log('from properties reducer');
            return Object.assign({}, properties, {
                token: action.token,
                isLogged: true
            });

        case 'LOGOUT' :
            return Object.assign({}, properties, {
                isLogged: false,
                token: null,
            });

        default :
            return properties;
    }
}

export default propertiesReducers;