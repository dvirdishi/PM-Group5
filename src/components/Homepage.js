import React from "react"
import Ofek from "../images/Ofek.jpg"
import Niran from "../images/Niran.jpg"
import Dvir from "../images/Dvir.jpg"
import Aviya from "../images/Aviya.jpg"

export default function Homepage() {
    return (
        <div className="wrapper-grid">
            <div className="container">
                <div className='banner-img'></div>
                <img src={Ofek} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Ofek Elgozi</h1>
                <p className="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <button className='button'>Book Appointment</button>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Niran} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Niran Dishi</h1>
                <p className="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <button className='button'>Book Appointment</button>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Dvir} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Dvir Dishi</h1>
                <p className="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <button className='button'>Book Appointment</button>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Aviya} alt='profile image' className="profile-img"></img>                   
                <h1 className="name">Aviya David </h1>
                <p className="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <button className='button'>Book Appointment</button>
            </div>
        </div>
    )
}



