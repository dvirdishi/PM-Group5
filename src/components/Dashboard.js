import React, { useState } from "react";// useeffect
//import { useAuthState } from "react-firebase-hooks/auth";
//import { useNavigate } from "react-router-dom";
import "../index.css";
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';
//import { auth, db } from "../firebase";
//import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {

    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);

    const [editMode, setEditMode] = useState(false);

    const [name, setName] = useState([]);
    const [year, setYear] = useState(defaultBirthday.getFullYear());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [speciality, setSpec] = useState([]);
//add inside the parentheses the variable name
    const stored = {name, month, day, year, speciality};

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setMonth(result.month);
            setDay(result.day);
            setYear(result.year);
            setSpec(result.speciality);
            //add here another variables
        }
        setEditMode(false);
    }

    return (<div>
        <div className="container_dash">
            <div className="App_dash">
                {
                    editMode
                        ? <>
                            <EditableUserProfile
                                stored={stored}
                                editCompleteCallback={handleEditComplete}
                            />
                        </>
                        : <>
                            <UserProfile
                                stored={stored}
                                startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }
            </div>

        </div>
    </div>
    );
}
export default Dashboard;