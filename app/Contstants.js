/**
 * Created by usamaahmed on 4/7/17.
 */
import { getAuthToken } from './helpers/auth';

export const initialState = {
    properties: {
        isLoading: false,
        message: null,
        token: null,
        isLogged: false
    },
    jobs: [],
}

export const imageRoute = 'http://127.0.0.1:8000/storage/uploads/images/';
export const apiRoute = 'http://learn-graph-api.ideasowners.net/api/';
export const graphRouteIOS = 'http://localhost:4000/graphql';
export const graphRouteAndroid = 'http://192.168.10.10:4000/graphql';
