/**
 * Created by usamaahmed on 4/10/17.
 */
import { combineReducers } from 'redux';
import propertiesReducers from '../reducers/propertiesReducers';
import jobReducers from '../reducers/jobReducers'

let rootReducers = combineReducers({
    properties: propertiesReducers,
    jobs: jobReducers
})

export default rootReducers;