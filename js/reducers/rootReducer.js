import { combineReducers } from 'redux';
import auth from './auth';
import userAction from './userActions';

const rootReducer = combineReducers({
    auth,
    userAction
});

export default rootReducer;