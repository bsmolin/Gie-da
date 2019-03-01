import { createStore, combineReducers, compose } from 'redux';
import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase';

const rootReducer = combineReducers({
    firebase: firebaseStateReducer
})

const config = {
    apiKey: "AIzaSyC40Z2y0aDxnktyEU5FIfq4gY_9c9dLewI",
    authDomain: "gielda-856fa.firebaseapp.com",
    databaseURL: "https://gielda-856fa.firebaseio.com",
    projectId: "gielda-856fa",
    storageBucket: "gielda-856fa.appspot.com",
    messagingSenderId: "740732197790"
};

const createStoreWithFirebase = compose(
    reduxReactFirebase(config),
)(createStore);


store = createStoreWithFirebase(rootReducer, initialState);