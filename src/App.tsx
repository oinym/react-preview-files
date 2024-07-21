import React, { useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import { GlobalContext,  } from './context';

function App() {
    const [fileObject,setFileObject]=useState<Object>({})

    return (
        <GlobalContext.Provider value={{fileObject,setFileObject}}>
        <div className="App">
            <header className="App-header">
                <Link to="/">Home</Link>
                <Link to={"/details"}>Details</Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </div>
        </GlobalContext.Provider>
    );
}

export default App;
