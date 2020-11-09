import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/store";
import store from "./redux/redux-store";
import {Provider} from "react-redux";



export let rerenderEntireTree = () => {
    ReactDOM.render(
            <Provider store ={store}>
                <App/>
            </Provider>


        ,
        document.getElementById('root')
    );
}

/*rerenderEntireTree();*/

/*store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})*/






