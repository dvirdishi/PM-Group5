import React, { useEffect, useState } from "react"
import Doctor from "../images/doctoricon.png"
import {Link} from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Homepage() {

    const [data,setData] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
    }, [user, loading]);

    const getAllDocs = async () => 
    {
        const querySnapshot = await getDocs(collection(db, "users"));
        let i = 0;
        let tempData = []
        querySnapshot.forEach((doc) => {
            tempData.push(doc.data());
            tempData[i].id = doc.id;
        i++;
        });
        return tempData;
    }

   useEffect( () => {
     getAllDocs().then(res => setData(res));
    }, [])

    return (
    <div>
        <div className="buttons_group" style={{ flexDirection: "row" }} >
        <Link to="/FilterCity">
            <button className="SearchButton" style={{ flexDirection: "row" }} >City</button>
        </Link>
        <Link to="/FilterSpec">
        <button className="SearchButton" style={{ flexDirection: "row" }} >Speciality</button>
        </Link>
        <Link to="/FilterSearch">
        <button className="SearchButton" style={{ flexDirection: "row" }} >Search</button>
        </Link>
        </div>
        <div className="wrapper-grid">
            {data && data.map((doc) => doc.isdoctor === '1' && (
            <div key={doc.uid} className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>
                <h1 className="name">{doc.name}</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to={"/Schedule/"+ doc.uid}>
                <button className='button'>Schedule Meeting</button>
                </Link>
            </div> 
        ))}
        </div>
    </div>
    )
}






