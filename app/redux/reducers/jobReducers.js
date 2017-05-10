/**
 * Created by usamaahmed on 5/5/17.
 */
let jobReducers = function(jobs = [], action) {
    switch (action.type) {
        case 'JOB_INDEX' :
            return action.jobs;
        default :
            return jobs;
    }
}

export default jobReducers;