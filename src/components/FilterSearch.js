import React, { useEffect, useState } from "react"
import Doctor from "../images/doctoricon.png"
import {Link} from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export default function FilterSearch() {

    const [temp_name, setName] = useState("");
    const [data,setData] = useState([]);
    const getAllDocs = async () =>
    {
        const querySnapshot = await getDocs(collection(db, "users"));
        let i = 0;
        let tempData = []
        querySnapshot.forEach((doc) => {
            tempData.push(doc.data());
            tempData[i].uid = doc.data().uid;
        i++;
        });
        return tempData;
    }

   useEffect( () => {
     getAllDocs().then(res => setData(res));
    }, [])


    return (
    <div>
        <input
            type="text"
            className="input_search"
            value={temp_name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Doctor's Name"
        />
        <div className="wrapper-grid">
            {data && data.map((doc) => doc.isdoctor === '1' && doc.name == temp_name &&(
            <div key={doc.uid} className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>
                <h1 className="name">{doc.name}</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>
            </div> 
        ))}
        </div>
    </div>
    )
}






