import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsConteiner";
import { UsersContainer } from './components/Users/UsersContainer';




/*Ctrl + Shift - -> - быстрое выделение фрагмента от того места, где установлен курсор.*/
/*Ctrl + Shift + N  - поиск*/

function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={()=> <DialogsContainer/>}/>
                    <Route path={'/profile'} render ={() => <Profile/>}/>
                    <Route path={'/users'} render ={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
