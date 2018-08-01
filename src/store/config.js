/**
 * Created by jsking on 7/31/18.
 */

// redux store config
import {createStore, combineReducers } from 'redux';

import itemReducer from './reducers/root';


const rootReducer = combineReducers({

    reduced_items : itemReducer, // what happened here, what is combined store doing

});

const configStore = () => {

return createStore(rootReducer);

};


export default configStore;