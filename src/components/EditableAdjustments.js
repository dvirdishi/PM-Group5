import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db} from "../firebase";
import React,{ useState, useEffect } from 'react';
import { Calendar } from "@progress/kendo-react-dateinputs";
import months from "../months";

function renderDaysOptions() {
    return months.getDays().map( (m, i) => {
        return <option
            key={i}
            value={i}>
            {m.fullName}
        </option>
    });
}
function getNextWeek(){
    var today, dd, mm, yyyy;
    today=new Date();
    var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return nextWeek;
}


function CalendarAdjustments({stored,editCompleteCallback}) {
    
    console.log("Edit Doctor Adjustments");
    const [freeDay, setFreeDay] = useState(stored.freeDay);
    const [durationOne, setDurationOne] = useState(stored.durationOne);
    const [durationTwo, setDurationTwo] = useState(stored.durationTwo);
    const [VactionFrom, setVactionFrom] = useState(null);
    const [VactionUntil, setVactionUntil] = useState(null);
    const [t_vactionfrom, setT_vactionfrom] = useState(stored.VactionFrom);
    const [t_vacationuntil, setT_vacationuntil] = useState(stored.VactionUntil);
    const [user, loading] = useAuthState(auth);
    
    const updateCustomDocument = async () => 
    {
        {
          const ref = doc(db, "doctor_settings", user.uid);
          await updateDoc(ref, 
            {
                free_day:freeDay,
                vaction_from: t_vactionfrom,
                vaction_until: t_vacationuntil,
                duration_one: durationOne,
                duration_two:durationTwo,
          });
        }
        window.location.reload(false);
    }

    const updateDocument = async () => 
    {
        {
          const ref = doc(db, "doctor_settings", user.uid);
          await updateDoc(ref, 
            {
                free_day:freeDay,
                vaction_from: VactionFrom.toDateString(),
                vaction_until: VactionUntil.toDateString(),
                duration_one: durationOne,
                duration_two:durationTwo,
          });
        }
        window.location.reload(false);
    }

    function handleCancelClicked() {
        console.log("Cancelled");
        editCompleteCallback(null);
    }
    function handleSaveClicked() {
        if(Date.parse(VactionUntil) < Date.parse(VactionFrom))
        {
            alert("Wrong Date, Please Choose Until When You Want To Take A Vaction Agian." + "\n" + "Minimum Date: " + VactionFrom.toDateString());
        }
        else if(VactionUntil == null && VactionFrom == null)
        {
            updateCustomDocument();
            editCompleteCallback({freeDay, t_vactionfrom, t_vacationuntil,durationOne, durationTwo});
        }
        else
        {
            updateDocument();
            editCompleteCallback({freeDay, VactionFrom, VactionUntil,durationOne, durationTwo});
        }
    }
    useEffect(() => {
        if (loading) return;
    }, [user, loading]);

    useEffect(() => {
        // Bail out if there is no date selected
        if (!VactionFrom) return;
        VactionFrom.toDateString();
    }, [VactionFrom]);

    useEffect(() => {
        // Bail out if there is no date selected
        if (!VactionUntil) return;
        VactionUntil.toDateString();
    }, [VactionUntil]);

    const onDateUntilChange = e => {
        setVactionUntil(e.value);
    };

    const onDateFromChange = e => {
        setVactionFrom(e.value);
    };

  return (
      
    <div className= ''>
       <br></br>
    
    <h3 className='h3_adj'>Day-off</h3>
    <div className= 'workdays'>

   
    <select
                value={freeDay}
                onChange={e => setFreeDay(e.target.value)}
            >{renderDaysOptions()}
            </select>
      
    
</div>
            <h3 className='h3_adj'>Vacantion</h3>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
            <div className="k-my-8">
            <div className="k-flex k-display-flex k-mb-4">
            <Calendar value={VactionFrom} onChange={onDateFromChange}  min={getNextWeek()}  />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Calendar value={VactionUntil} onChange={onDateUntilChange}  min={getNextWeek()} />
            </div>
            {VactionFrom && VactionUntil ? (
                <div>
                    <b>Vaction From: {VactionFrom.toDateString()}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     Vaction Until: {VactionUntil.toDateString()}</b>
                    <br></br>
                </div>
            ) : null}
            </div>
            </div>
   
       <h3 className='h3_adj'>Appointment Settings</h3>

            <div className='appoint'>
            <div className= 'appoint_thing'>
            <h4>Face to Face</h4>
            </div>
            <div className= 'appoint_thing'>
            <input
                type='number'
                placeholder='Duration'
                min={0}
                max={30}
                value={durationOne}
                onChange={e => setDurationOne(e.target.value)}
                style={{width: "50px"}}

            />
            </div>
       </div>
       <div className='appoint'>
            <div className= 'appoint_thing'>
            <h4>Zoom</h4>
            </div>
            <div className= 'appoint_thing'>
            <input
                type='number'
                min={0}
                max={30}
                placeholder='Duration'

                value={durationTwo}
                onChange={e => setDurationTwo(e.target.value)}
                style={{width: "50px"}}

            />
            </div>
       </div>
       <br></br>
       <div className="btn-group-adj">
                <button className='adj_btn' onClick={handleSaveClicked}>Save</button>
                <button className='adj_btn' onClick={handleCancelClicked}>Cancel</button>
            </div>
    </div>
  );
}

export default CalendarAdjustments;