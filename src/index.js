import "@progress/kendo-theme-default/dist/all.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Schedule from "./components/Schedule";
import About from "./components/AboutDONA";
import Policy from "./components/Policy";
import Mail from "./components/Mail";
import Table from "./components/Table";
import * as serviceWorker from './components/serviceWorker';
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
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/profile" element={<User />} />
                    <Route exact path="/Schedule" element={<Schedule />} />
                    <Route exact path="/About" element={<About />} />
                    <Route exact path="/Policy" element={<Policy />} />
                    <Route exact path="/contact" element={<Mail />} />
                    <Route exact path="/MyMeetings" element={<Table />} />
                </Routes>
            </div>
        </Router>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();