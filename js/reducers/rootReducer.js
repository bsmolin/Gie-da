import { combineReducers } from 'redux';
import auth from './auth';
import userAction from './userActions';
import updateCurrencies from './currencies';

const rootReducer = combineReducers({
    auth,
    userAction,
    updateCurrencies
});

export default rootReducer;