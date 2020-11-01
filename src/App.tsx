import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";

type AppPropsType ={
    state: RootStateType
    addPost: () => void
    updateNewPostText: (NewText: string) => void
}
function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render ={() => <Profile
                        profilePage ={props.state.profilePage}
                        dispatch ={props.dispatch} />}/>
                    <Route path={'/dialogs'} render={()=> <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
