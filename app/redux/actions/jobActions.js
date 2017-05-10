/**
 * Created by usamaahmed on 5/5/17.
 */

import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import axios from 'axios';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JQB_QUERY_PARAMS = {
    publisher: '7574486406052057',
    format: 'json',
    v: '2',
    latlng: 1,
    radius: '10',
    q: 'javascript'
}

const buildUrl = (zip) => {
    const query = qs.stringify({...JQB_QUERY_PARAMS, l: zip});
    return `${JOB_ROOT_URL}${query}`;
}

export const fetchJobs = (region, callback) => async (dispatch) => {
    try {
        let zip = await reverseGeocode(region);
        const url = buildUrl(zip);
        let { data } = await axios.get(url);
        dispatch(jobIndex(data.results));
        callback();
    } catch (e) {
        console.log(e)
    }
};
export const jobIndex = (data) => {
    return {
        type: 'JOB_INDEX',
        jobs: data
    }
};
export const jobShow = () => {


}


//export default jobActions;