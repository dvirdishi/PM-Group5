import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db} from "../firebase";
import React,{ useState, useEffect } from 'react';
import months from "../months";

function renderDaysOptions() {
    return months.getDays().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.fullName}
        </option>
    });
}
function getNextWeek(){
    var today, dd, mm, yyyy;
    today=new Date();
    var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dd= nextWeek.getDate();
    mm= nextWeek.getMonth()+1;
    yyyy= nextWeek.getFullYear();
    if(dd<10){
        dd='0'+dd
      } 
      if(mm<10){
        mm='0'+mm
      } 
      nextWeek = yyyy+'-'+mm+'-'+dd;

    return nextWeek;
}


function CalendarAdjustments({stored,editCompleteCallback}) {
    
    console.log("Edit Doctor Adjustments");
    const [freeDay, setFreeDay] = useState(stored.freeDay);
    const [VactionFrom, setVactionFrom] = useState(stored.VactionFrom);
    const [VactionUntil, setVactionUntil] = useState(stored.VactionUntil);
    const [durationOne, setDurationOne] = useState(stored.durationOne);
    const [durationTwo, setDurationTwo] = useState(stored.durationTwo);
    const [user, loading] = useAuthState(auth);
    const updateDocument = async () => 
    {
        {
          const ref = doc(db, "doctor_settings", user.uid);
          await updateDoc(ref, 
            {
                free_day:freeDay,
                vaction_from:VactionFrom,
                vaction_until:VactionUntil,
                duration_one: durationOne,
                duration_two:durationTwo,
          });
        }
      }
      function handleCancelClicked() {
        console.log("Cancelled");
        editCompleteCallback(null);
    }
    function handleSaveClicked() {
        console.log("Saved");
        updateDocument();
        editCompleteCallback({freeDay, VactionFrom, VactionUntil,durationOne, durationTwo});
    }
    useEffect(() => {
        if (loading) return;
    }, [user, loading]);

  return (
    <div className= 'adj'>
    <h2 className='h2_adj'>Day-off</h2>
    <div className= 'workdays'>

    <br></br>
    <select
                value={freeDay}
                onChange={e => setFreeDay(e.target.value)}
            >{renderDaysOptions()}
            </select>
      
    <br></br>
    <br></br>
</div>
            <h2 className='h2_adj'>Vacantion</h2>
            <div className='datesgrid'>
            <div className= 'vacDate'>
            <input
                type='date'
                value={VactionFrom}
                min={getNextWeek()}
                onChange={e => setVactionFrom(e.target.value)}
            />
            </div>
            <div className= 'vacDate'>
            <input
                type='date'
                min={VactionFrom}
                value={VactionUntil}
                onChange={e => setVactionUntil(e.target.value)}
            />
            </div>
       </div>
       <br></br>
       <br></br>
       <h2 className='h2_adj'>Appointment Settings</h2>

            <div className='appoint'>
            <div className= 'appoint_thing'>
            <h3>Face to Face</h3>
            </div>
            <div className= 'appoint_thing'>
            <input
                type='number'
                placeholder='Duration'
                min={5}
                value={durationOne}
                onChange={e => setDurationOne(e.target.value)}
            />
            </div>
       </div>
       <div className='appoint'>
            <div className= 'appoint_thing'>
            <h3>Zoom</h3>
            </div>
            <div className= 'appoint_thing'>
            <input
                type='number'
                min={5}
                placeholder='Duration'

                value={durationTwo}
                onChange={e => setDurationTwo(e.target.value)}
            />
            </div>
       </div>
       <br></br>
       <div className="btn-group-dash">
                <button onClick={handleSaveClicked}>Save</button>
                <button onClick={handleCancelClicked}>Cancel</button>
            </div>
    </div>
  );
}

export default CalendarAdjustments;