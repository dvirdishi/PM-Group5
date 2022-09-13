import { Calendar } from "@progress/kendo-react-dateinputs";
import React, { useEffect, useRef, useState } from "react";
import { NewAppointment } from "../firebase";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams} from "react-router-dom";
import { db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import months from "../months";

let ButEnable=1;
let TypeEnable=1;

    var today = new Date();//Current date variable

    let times = [
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
    ];


    const pickSlotTimes = times => {
            return times;
    };

export default function Schedule() {
    const [DoctorZoom, setZoomDuration] = useState([]);
    const [DoctorFaceToFace, setFacetofaceDuration] = useState([]);
    const [VactionFrom, setVactionFrom] = useState([]);
    const [VactionUntil, setVactionUntil] = useState([]);
    const [FreeDay, setFreeDay] = useState([]);
    const [MyData, setMyData] = useState([]);
    const [OthersData, setOthersData] = useState([]);
    const [bookingDate, setBookingDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [selectedTypeSlot, setSelectedTypeSlot] = useState(null);
    const [bookingTimes, setBookingTimes] = useState([]);
    const timeSlotCacheRef = useRef(new Map());
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const {tempid} = useParams();

    const fetchDoctorSettings = async () => {
        const q = query(collection(db, "doctor_settings"), where("uid", "==", tempid));
        console.log(tempid);
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setZoomDuration(data?.duration_two);
        setFacetofaceDuration(data?.duration_one);
        setVactionFrom(data?.vaction_from);
        setVactionUntil(data?.vaction_until);
        setFreeDay(data?.free_day);
        };


    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        fetchDoctorSettings();
    }, [user, loading]);

    
const GetOthersData = async () => 
  {
      const querySnapshot = await getDocs(collection(db, "appointments"));
      let i = 0;
      let tempData = []
      querySnapshot.forEach((doc) => {
        if(user.uid != doc.data().cid && user.uid != doc.data().did)
        {
          tempData.push(doc.data());
          tempData[i].id = doc.id;
          i++;
        }
      });
      return tempData;
  }

  useEffect( () => {
    GetOthersData().then(res => setOthersData(res));
   }, [])

  const GetMyMeetings = async () => 
  {
      const querySnapshot = await getDocs(collection(db, "appointments"));
      let i = 0;
      let tempData = []
      querySnapshot.forEach((doc) => {
        if(user.uid == doc.data().cid || user.uid == doc.data().did)
        {
          tempData.push(doc.data());
          tempData[i].id = doc.id;
          i++;
        }
      });
      return tempData;
  }

  useEffect( () => {
    GetMyMeetings().then(res => setMyData(res));
   }, [])

    const Meeting = () => {
        let i =0;
        let flag = 0;
        let day = months.getShortDays(FreeDay).toString();
        let long_day = months.getFullDays(FreeDay).toString();
        ///////////////////////////
        if(bookingDate.toDateString().includes(day))
        {
            alert("The Doctor Doesnt Get Any Meetings In "+ long_day);
            flag = 1;
        }
        ///////////////////////////
        if(selectedTypeSlot == "Zoom" && DoctorZoom == 0)
        {
            alert("This Doctor Doesnt Have This Kind Of Meeting (Zoom).");
            flag = 1;
        }
        ///////////////////////////
        if(selectedTypeSlot == "FaceToFace" && DoctorFaceToFace == 0)
        {
            alert("This Doctor Doesnt Have This Kind Of Meeting (Face To Face).");
            flag = 1;
        }
        ///////////////////////////
        for(i =0;i<MyData.length;i++)
        {
            if(bookingDate.toDateString() == MyData[i].date && MyData[i].did == tempid && selectedTimeSlot == MyData[i].hour)
            {
                alert("You Already Have A Meeting In That Date.");
                flag = 1;
            }
        }
        ///////////////////////////
        for(i =0;i<OthersData.length;i++)
        {
            if(bookingDate.toDateString() == OthersData[i].date && OthersData[i].did == tempid && selectedTimeSlot == OthersData[i].hour)
            {
                alert("Someone Already Have A Meeting In That Date.");
                flag = 1;
            }
        }
        ///////////////////////////
        if(Date.parse(bookingDate.toDateString()) >= Date.parse(VactionFrom) && Date.parse(bookingDate.toDateString()) <= Date.parse(VactionUntil))
        {
            alert("The Doctor Is On Vaction, Please Choose Another Date. " + "\n" + "(" + VactionFrom + " - " + VactionUntil +")");
            flag =1;
        }
        ///////////////////////////
        if(flag == 0 && selectedTypeSlot == "Zoom")
        {
            NewAppointment(tempid,user.uid,bookingDate.toDateString(),selectedTimeSlot,DoctorZoom,selectedTypeSlot);
            navigate("/");
        }
        else if(flag == 0 && selectedTypeSlot == "FaceToFace")
        {
            NewAppointment(tempid,user.uid,bookingDate.toDateString(),selectedTimeSlot,DoctorFaceToFace,selectedTypeSlot);
            navigate("/");
        }
    };

    useEffect(() => {
        // Bail out if there is no date selected
        if (!bookingDate) return;

        // Get time slots from cache
        let newBookingTimes = timeSlotCacheRef.current.get(
            bookingDate.toDateString()
        );

        // If we have no cached time slots then pick new ones
        if (!newBookingTimes) {
            newBookingTimes = pickSlotTimes(times);
            // Update cache with new time slots for the selected date
            timeSlotCacheRef.current.set(bookingDate.toDateString(), newBookingTimes);
        }

        setBookingTimes(newBookingTimes);
    }, [bookingDate]);

    const onDateChange = e => {
        setSelectedTimeSlot(null);
        setSelectedTypeSlot(null);
        setBookingDate(e.value);
        ButEnable=1;
        TypeEnable=1;
    };

    function disable_enable_button(time)
    {
        setSelectedTimeSlot(time);
        TypeEnable=0;
    }
    
    const meeting_type_zoom = () => {
        setSelectedTypeSlot("Zoom");
        ButEnable=0;
    };

    const meeting_type_FaceToFace = () => {
        setSelectedTypeSlot("FaceToFace");
        ButEnable=0;
    };

    return (
       <div className ="schedule_form" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '55vh'}}>
        <div className="k-my-8">
            <div style={{fontSize:"28px"}} className="k-mb-4 k-font-weight-bold">Appointments Schedule </div>
            <div className="k-flex k-display-flex k-mb-4">
                <Calendar value={bookingDate} onChange={onDateChange}  min={new Date(today.getFullYear(), today.getMonth(), today.getDate())} />

                <div className="k-ml-4 k-display-flex k-flex-col">
                    {bookingTimes.map(time => {
                        return (
                            <button style={{backgroundColor:"white", fontSize:"15px"}}
                                key={time}
                                className="k-button k-mb-4"
                                onClick={() => disable_enable_button(time)}
                            >
                                {time}
                            </button>
                        );
                    })}

                </div>

            </div>

            {bookingDate && selectedTimeSlot && selectedTypeSlot ? (
                <div>
                    <b>Selected slot: {bookingDate.toDateString()} at {selectedTimeSlot}</b>
                    <br></br>
                    <b>Meeting type: {selectedTypeSlot}</b>
                    <br></br>
                </div>
            ) : null}
            {
                <div >
                    <div>
                        <br></br>
                        <button  className = "schedule__btn2" id="Zoom " disabled={TypeEnable}  onClick={meeting_type_zoom}>Zoom </button>
                        &nbsp;&nbsp;&nbsp;
                        <button  className = "schedule__btn2" id="FaceToFace " disabled={TypeEnable} onClick={meeting_type_FaceToFace}>FaceToFace </button>
                        <br></br>
                    </div>
                    <div>
                        <br></br>
                        <button className= "schedule__btn" id="Book an appointment " disabled={ButEnable} onClick={Meeting}>Book an appointment </button>
                    </div>
                </div>
            }
        </div>
</div>
    );
}