import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import store, {ActionType, RootStateType, StoreType} from "./redux/state";

type PropsType ={
    store: StoreType
    dispatch: (action: ActionType)=> void
}
function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render ={() => <Profile
                        profilePage ={props.store._state.profilePage}
                        dispatch ={props.dispatch} />}/>
                    <Route path={'/dialogs'} render={()=> <Dialogs store={props.store} />}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
