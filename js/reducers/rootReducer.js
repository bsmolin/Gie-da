import { combineReducers } from 'redux';
import auth from './auth';
import updateCurrencies from './currencies';

const rootReducer = combineReducers({
    auth,
    updateCurrencies
});

export default rootReducer;