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
import ScheduleEdit from "./components/ScheduleEdit";
import About from "./components/AboutDONA";
import Policy from "./components/Policy";
import Mail from "./components/Mail";
import Table from "./components/Table";
import Admin from "./components/Admin";
import RegisterDoctor from "./components/RegisterDoctor";
import * as serviceWorker from './components/serviceWorker';
import FilterCity from "./components/FilterCity";
import FilterSpec from "./components/FilterSpec";
import FilterSearch from "./components/FilterSearch";
import CalendarAdjustments from "./components/CalendarAdjustments";
import MeetingsSummary from "./components/MeetingsSummary";
import MeetingsSummaryEdit from "./components/MeetingsSummaryEdit";
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/RegisterDoctor" element={<RegisterDoctor />} />
                    <Route path="/reset" element={<Reset />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<User />} />
                    <Route path="/Schedule/:tempid" element={<Schedule />} />
                    <Route path="/ScheduleEdit/:tempid/:tempid2" element={<ScheduleEdit />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Policy" element={<Policy />} />
                    <Route path="/contact" element={<Mail />} />
                    <Route path="/MyMeetings" element={<Table />} />
                    <Route path="/Adminpanel" element={<Admin />} />
                    <Route path="/FilterCity" element={<FilterCity />} />
                    <Route path="/FilterSpec" element={<FilterSpec />} />
                    <Route path="/FilterSearch" element={<FilterSearch />} />
                    <Route path="/CalendarAdjustments" element={<CalendarAdjustments />} />
                    <Route path="/MeetingsSummary" element={<MeetingsSummary />} />
                    <Route path="/MeetingsSummaryEdit/:tempid" element={<MeetingsSummaryEdit />} />

                </Routes>
            </div>
        </Router>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();