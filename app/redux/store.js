/**
 * Created by usamaahmed on 4/10/17.
 */
import { compose , applyMiddleware , createStore } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from '../redux/reducers/index';
import { initialState } from '../Contstants';

let finalCreateStore = compose(applyMiddleware(thunkMiddleware, logger))(createStore);

function configureStore(initialState) {
    return finalCreateStore(rootReducers, initialState);
}

export default configureStore;