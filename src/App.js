import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import {useStateValue} from "./StateProvider";

function App() {

    const [{isLoggedIn}, dispatch] = useStateValue();

    return (
        <div className="app">
            {isLoggedIn
                ?
                <>
                    <Header/>
                    <div className="app__body">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </div>
                </>
                :
                <Login/>
            }

        </div>
    );
}

export default App;
