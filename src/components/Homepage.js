import React from "react"
import Doctor from "../images/doctoricon.png"
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <div className="wrapper-grid">
            <div className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Ofek Elgozi</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Niran Dishi</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Dvir Dishi</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Aviya David </h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>

            </div>
        </div>
    )
}



