import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../index.css";
function User() {

    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState([]);
    const [year, setYear] = useState(defaultBirthday.getFullYear());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [speciality, setSpec] = useState([]);
    const stored = {name, month, day, year, speciality};
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const fetchUserName = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setName(data.name);
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        fetchUserName();
    }, [user, loading]);

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
export default User;