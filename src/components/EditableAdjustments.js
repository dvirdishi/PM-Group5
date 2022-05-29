
//for editable
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db} from "../firebase";


function CalendarAdjustments() {
    
    console.log("Edit Doctor Adjustments");
    const [Workdays, setWorkDays] = useState(stored.Workdays);
    const [WorkFrom, setWorkFrom] = useState(stored.WorkFrom);
    const [WorkUntil, setWorkUntil] = useState(stored.WorkUntil);
    const [BreakFrom, setBreakFrom] = useState(stored.BreakFrom);
    const [BreakUntil, setBreakUntil] = useState(stored.BreakUntil);
    const [VactionFrom, setVactionFrom] = useState(stored.VactionFrom);
    const [VactionUntil, setVactionUntil] = useState(stored.VactionUntil);
    const [durationOne, setDurationOne] = useState(stored.durationOne);
    const [durationTwo, setDurationTwo] = useState(stored.durationTwo);
    const [user, loading] = useAuthState(auth);
    const updateDocument = async () => 
    {
        {
          const ref = doc(db, "doctor_calendar_settings", user.uid);
          await updateDoc(ref, 
            {
                workdays:Workdays,
                work_from:WorkFrom,
                work_until:WorkUntil,
                break_from:BreakFrom,
                break_until:BreakUntil,
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
        editCompleteCallback({Workdays, WorkFrom, WorkUntil, BreakFrom, BreakUntil, VactionFrom, VactionUntil,durationOne, durationTwo});
    }
    useEffect(() => {
        if (loading) return;
    }, [user, loading]);

  return (
    <div className= 'adj'>
    <h2 className='h2_adj'>Workdays</h2>
    <div className= 'workdays'>

    <br></br>
      <FormControl sx={{display:'grid-inline' }} component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Sunday"
          labelPlacement="top"
           onChange={e => setWorkDays(e.target.WorkDays['1'])}
          />
      </FormGroup>
      
    </FormControl>
    
    <FormControl sx={{ display:'grid-inline' }} component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Monday"
          labelPlacement="top"
          onChange={e => setWorkDays(e.target.WorkDays['2'])}

          />
       
      </FormGroup>
    </FormControl>
    <FormControl sx={{ display:'grid-inline' }}  component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Tuesday"
          labelPlacement="top"
          onChange={e => setWorkDays(e.target.WorkDays['3'])}

          />
       
      </FormGroup>
    </FormControl>
    <FormControl sx={{ display:'grid-inline' }} component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Wednesday"
          labelPlacement="top"
          onChange={e => setWorkDays(e.target.WorkDays['4'])}

          />
       
      </FormGroup>
    </FormControl>
    <FormControl sx={{ display:'grid-inline' }} component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Thursday"
          labelPlacement="top"
          onChange={e => setWorkDays(e.target.WorkDays['5'])}

          />
       
      </FormGroup>
    </FormControl>
    <FormControl sx={{ display:'grid-inline' }} component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Friday"
          labelPlacement="top"
          onChange={e => setWorkDays(e.target.WorkDays['6'])}

          />
       
      </FormGroup>
    </FormControl>
    <FormControl sx={{ display:'grid-inline' }} component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Saturday"
          labelPlacement="top"
          onChange={e => setWorkDays(e.target.WorkDays['7'])}

          />
      </FormGroup>
    </FormControl>
    <br></br>
    <br></br>
</div>
    <h2 className='h2_adj'>Working Hours</h2>
    <div className='work_hours' >
        <div className= 'timeBox'>
            <input
                type='time'
               value={WorkFrom['1']}
               onChange={e => setWorkFrom(e.target.value)}
               />
       </div>
    <div className= 'timeBox'>
            <input
                type='time'
                value={WorkFrom['2']}
               onChange={e => setWorkFrom(e.target.value)}
            />
       </div>
      
<div className= 'timeBox'>
            <input
                type='time'
                value={WorkFrom['3']}
                onChange={e => setWorkFrom(e.target.value)}
            />
       </div>
    <div className= 'timeBox'>
            <input
                type='time'
                value={WorkFrom['4']}
               onChange={e => setWorkFrom(e.target.value)}
            />
       </div>
<div className= 'timeBox'>
            <input
                type='time'
                value={WorkFrom['5']}
                onChange={e => setWorkFrom(e.target.value)}
            />
       </div>
    <div className= 'timeBox'>
            <input
                type='time'
                value={WorkFrom['6']}
               onChange={e => setWorkFrom(e.target.value)}
            />
       </div>
        
<div className= 'timeBox'>
            <input
                type='time'
                value={WorkFrom['7']}
                onChange={e => setWorkFrom(e.target.value)}
            />
            </div> 
        </div>

    <div className='work_hours' >
            
            <div className= 'timeBox'>
            <input
                type='time'
                value={WorkUntil['1']}
                onChange={e => setWorkUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={WorkUntil['2']}
                onChange={e => setWorkUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={WorkUntil['3']}
                onChange={e => setWorkUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={WorkUntil['4']}
                onChange={e => setWorkUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={WorkUntil['5']}
                onChange={e => setWorkUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={WorkUntil['6']}
                onChange={e => setWorkUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={WorkUntil['7']}
                onChange={e => setWorkUntil(e.target.value)}
            />
            </div>
            </div> 
            <br></br>
            <br></br>

            <h2 className='h2_adj'>Break Hours</h2>
    <div className='work_hours' >
        <div className= 'timeBox'>
            <input
                type='time'
                value={BreakFrom['1']}
                onChange={e => setBreakFrom(e.target.value)}
            />
       </div>
    <div className= 'timeBox'>
            <input
                type='time'
                value={BreakFrom['2']}
                onChange={e => setBreakFrom(e.target.value)}
            />
       </div>
      
<div className= 'timeBox'>
            <input
                type='time'
                value={BreakFrom['3']}
                onChange={e => setBreakFrom(e.target.value)}
            />
       </div>
    <div className= 'timeBox'>
            <input
                type='time'
                value={BreakFrom['4']}
                onChange={e => setBreakFrom(e.target.value)}
            />
       </div>
<div className= 'timeBox'>
            <input
                type='time'
                value={BreakFrom['5']}
                onChange={e => setBreakFrom(e.target.value)}
            />
       </div>
    <div className= 'timeBox'>
            <input
                type='time'
                value={BreakFrom['6']}
                onChange={e => setBreakFrom(e.target.value)}
            />
       </div>
        
<div className= 'timeBox'>
            <input
                type='time'
                value={BreakFrom['7']}
                onChange={e => setBreakFrom(e.target.value)}
            />
            </div> 
        </div>

    <div className='work_hours' >
            
            <div className= 'timeBox'>
            <input
                type='time'
                value={BreakUntil['1']}
                onChange={e => setBreakUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={BreakUntil['2']}
                onChange={e => setBreakUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={BreakUntil['3']}
                onChange={e => setBreakUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={BreakUntil['4']}
                onChange={e => setBreakUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={BreakUntil['5']}
                onChange={e => setBreakUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={BreakUntil['6']}
                onChange={e => setBreakUntil(e.target.value)}
            />
            </div> 
            <div className= 'timeBox'>
            <input
                type='time'
                value={BreakUntil['7']}
                onChange={e => setBreakUntil(e.target.value)}
            />
            </div>
            </div> 
            <br></br>
            <br></br>

            <h2 className='h2_adj'>Vacantion</h2>
            <div className='datesgrid'>
            <div className= 'vacDate'>
            <input
                type='date'
                value={VactionFrom}
                onChange={e => setVactionFrom(e.target.value)}
            />
            </div>
            <div className= 'vacDate'>
            <input
                type='date'
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