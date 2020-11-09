import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

import {BrowserRouter, Route} from 'react-router-dom';
import {ActionType,StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsConteiner";

/*Ctrl + Shift - -> - быстрое выделение фрагмента от того места, где установлен курсор.*/
/*Ctrl + Shift + N  - поиск*/
type PropsType ={
    store: any
    dispatch: (action: ActionType)=> void
}
function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=> <DialogsContainer/>}/>
                    <Route path={'/profile'} render ={() => <Profile/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
