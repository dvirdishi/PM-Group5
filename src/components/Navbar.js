import React from "react"
import { Link } from 'react-router-dom';
import Logo from "../images/1.png"
import SideBar from "./SideBar";

export default function Navbar() 
{
    return (
        <nav className="header">
            <img className="image" src={Logo} alt=""></img>
            <ul className="ul">
                <Link to="/">
                <button className="btn"><b><li className="li">Homepage</li></b></button>
                </Link>
                <Link to="/login">
                <button className="btn"><b><li className="li">Sign-in</li></b></button>
                </Link>
                <Link to="/about">
                    <button className="btn"><b><li className="li">About</li></b></button>
                </Link>
                <Link to="/Policy">
                    <button className="btn"><b><li className="li">Policy & Billing Plans</li></b></button>
                </Link>
                <Link to="/contact">
                    <button className="btn"><b><li className="li">Contact</li></b></button>
                </Link>
            </ul>
            <SideBar />
        </nav>
    )
}
