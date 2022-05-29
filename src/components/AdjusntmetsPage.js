//for page
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function CalendarAdjustments({stored, startEditCallback }) {

    console.log()
//inside div, add another field, copy from name and adjust

    return(

        <div className= 'adj'>
        <h2 className='h2_adj'>Workdays</h2>
        <div className= 'workdays'>
    
        <br></br>
        <FormGroup aria-label="position" row>
         <FormControlLabel disabled sx={{ display:'grid-inline' }} control={<Checkbox  />} label="Sunday" labelPlacement="top" />
         <FormControlLabel disabled sx={{ display:'grid-inline' }} control={<Checkbox  />} label="Monday" labelPlacement="top" />
         <FormControlLabel disabled sx={{ display:'grid-inline' }} control={<Checkbox  />} label="Tuesday" labelPlacement="top" />
         <FormControlLabel disabled sx={{ display:'grid-inline' }} control={<Checkbox  />} label="Wednesday" labelPlacement="top" />
         <FormControlLabel disabled sx={{ display:'grid-inline' }} control={<Checkbox  />} label="Thursday" labelPlacement="top" />
         <FormControlLabel disabled sx={{ display:'grid-inline' }} control={<Checkbox  />} label="Friday" labelPlacement="top" />
         <FormControlLabel disabled sx={{ display:'grid-inline' }} control={<Checkbox  />} label="Saturday" labelPlacement="top" />
        </FormGroup>
        
       
        <br></br>
        <br></br>
    </div>
        <h2 className='h2_adj'>Working Hours</h2>
        <div className='' >
            <div className= 'work_hours'>
                <h3>Work From</h3>{stored.WorkFrom}
           </div>
        <div className= 'work_hours'>
                 <h3>Work Until</h3>{stored.WorkUntil}
           </div>
          
    <div className= 'work_hours'>
                 <h3>Break From</h3>{stored.BreakFrom}

           </div>
        <div className= 'work_hours'>
                  <h3>Break Until</h3>{stored.BreakUntil}
           </div>
           <div className= 'work_hours'>
                  <h3>Vacantion</h3>{stored.VactionFrom}
                  {stored.VactionUntil}
           </div>
           <br></br>
       <br></br>
           <h2 className='h2_adj'>Appointment Settings</h2>
           <h3>Face to Face</h3>{stored.durationOne}
           <h3>Zoom</h3>{stored.durationTwo}

           <div>
        <button className='button_dash'
            onClick={startEditCallback}
        >Edit</button>
    </div>
          
    </div>
    </div>
        
    );
   }

