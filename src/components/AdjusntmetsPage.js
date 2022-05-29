//for page
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function CalendarAdjustments({stored, startEditCallback }) {

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
            <h2 className='h2_adj'>Vacantion</h2>
            <div className='datesgrid'>
            <div className= 'vacDate'>
            <input readOnly
                type='date'
                value={stored.VactionFrom}
            />
            </div>
            <div className= 'vacDate'>
            <input readOnly
                type='date'
                value={stored.VactionUntil}
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
            <input readOnly
                type='number'
                placeholder='Duration'
                value={stored.durationOne}
            />
            </div>
       </div>
       <div className='appoint'>
            <div className= 'appoint_thing'>
            <h3>Zoom</h3>
            </div>
            <div className= 'appoint_thing'>
            <input readOnly
                type='number'
                placeholder='Duration'
                value={stored.durationTwo}
            />
            </div>
       </div>
       <br></br>
    <div>
        <button_dash onClick={startEditCallback} >Edit</button_dash>
    </div>   
    </div>  
    );
   }

