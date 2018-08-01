import React from 'react';
import { AppRegistry } from 'react-native';

import {Provider} from 'react-redux';

import App from './App';

import configStore from './src/store/config';

const  store = configStore();

// making the system use redux state and store system//
const RNRedux = () => (
    <Provider store={store}>

              <App />

    </Provider>
);


//AppRegistry.registerComponent('ogwugo', () => App);


AppRegistry.registerComponent('ogwugo', () => RNRedux);

