import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() 
{
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/reset" element={<Reset />} />
                </Routes>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));