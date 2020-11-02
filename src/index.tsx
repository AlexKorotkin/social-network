

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";
import store from "./redux/state";



export let callSubscriber = (state: RootStateType) => {
    ReactDOM.render(
        <App
              store = {store}
              dispatch={store.dispatch.bind(store)}
              />
        ,
        document.getElementById('root')
    );
}

callSubscriber(store.getState());
store.subscribe(callSubscriber)






