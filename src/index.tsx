

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/store";
import store from "./redux/redux-store";



export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
             state = {state}
             store = {store}
              dispatch={store.dispatch.bind(store)}
              />
        ,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})






