import React from "react"
import { Link } from 'react-router-dom';
import Logo from "../images/1.png"

export default function Navbar() 
{
    return (
        <nav className="header">
            <img className="image" src={Logo} alt=""></img>
            <ul className="ul">
                <Link to="/">
                <button className="btn"><b><li className="li">Homepage</li></b></button>
                </Link>
                <Link to="/signin">
                <button className="btn"><b><li className="li">Sign-in</li></b></button>
                </Link>
            </ul>
        </nav>
    )
}