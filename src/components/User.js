import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db} from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import DONA from "../images/1.png"
import "../index.css";
function User() {
    const now = new Date(Date.now());
    const defaultBirthday = new Date(now.getTime() + 86400000);
    const [editMode, setEditMode] = useState(false);
    const [nameos, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [year, setYear] = useState(defaultBirthday.getFullYear());
    const [month, setMonth] = useState(defaultBirthday.getMonth());
    const [day, setDay] = useState(defaultBirthday.getDate());
    const [speciality, setSpec] = useState([]);
    const [address, setAddress] = useState([]);
    const [private_phone, setPhone] = useState([]);
    const [clinic_phone, setClinicPhone] = useState([]);
    const [treatment, setTreat] = useState([]);
    const [isdoctor,get_isdoctor]= useState([]);
    const stored = {nameos, month, day, year, speciality, email, treatment, private_phone, address, clinic_phone, isdoctor};
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    const fetchUserName = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setName(data.name);
    setMonth(data.month);
    setDay(data.day);
    setYear(data.year);
    setSpec(data.speciality);
    setEmail(data.email);
    setAddress(data.address);
    setPhone(data.private_phone);
    setClinicPhone(data.clinic_phone);
    setTreat(data.treatment);
    get_isdoctor(data.isdoctor);
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        if(user && user.email == "donacontactmail@gmail.com") return navigate("/Adminpanel");
        fetchUserName();
    }, [user, loading]);
    

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.nameos);
            setMonth(result.month);
            setDay(result.day);
            setYear(result.year);
            setSpec(result.speciality);
            setEmail(result.email);
            setAddress(result.address);
            setPhone(result.private_phone);
            setClinicPhone(result.clinic_phone);
            setTreat(result.treatment);
        }
        setEditMode(false);
    }

    return (
    <div>
        <div className="BottomMessageBar">
            <img src={DONA} alt='profile image' className="ButtomBarPic"></img>
            <h1 className='h1_Message'>Donacontactmail@gmail.com</h1>
            <h1 className='h2_Message'><span >Logged In As</span> <span className='user_h1'>{nameos}</span></h1>
        </div>
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