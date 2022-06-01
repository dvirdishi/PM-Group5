import EditableAdjustments from './EditableAdjustments';
import AdjusntmetsPage from './AdjusntmetsPage';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db} from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import "../index.css";

function CalendarAdjustments() {
    const [editMode, setEditMode] = useState(false);
    const [freeDay, setFreeDay] = useState([]);
    const [VactionFrom, setVactionFrom] = useState([]);
    const [VactionUntil, setVactionUntil] = useState([]);
    const [durationOne, setDurationOne] = useState([]);
    const [durationTwo, setDurationTwo] = useState([]);
    const stored = {freeDay, VactionFrom, VactionUntil, durationOne, durationTwo};
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    const fetchUserName = async () => {
    const q = query(collection(db, "doctor_settings"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setFreeDay(data.free_day);
    setVactionFrom(data?.vaction_from);
    setVactionUntil(data?.vaction_until);
    setDurationOne(data.duration_one);
    setDurationTwo(data.duration_two);
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        fetchUserName();
    }, [user, loading]);
    

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setFreeDay(result.freeDay);
            setVactionFrom(result?.VactionFrom);
            setVactionUntil(result?.VactionUntil);
            setDurationOne(result.durationOne);
            setDurationTwo(result.durationTwo);
        }
        setEditMode(false);
    }

    return (
    <div>
        <div>
            <div className="adj">
                {
                    editMode
                        ? <>
                            <EditableAdjustments
                                stored={stored}
                                editCompleteCallback={handleEditComplete}
                            />
                        </>
                        : <>
                            <AdjusntmetsPage
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
export default CalendarAdjustments;