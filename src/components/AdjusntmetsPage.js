//for page
import React from 'react';
import months from '../months';



export default function CalendarAdjustments({stored, startEditCallback }) {

    return(
        <div className= 'adj'>
        <h2 className='h2_adj'>Day-off</h2>
        <div className= 'workdays'>
        <br></br>
        {months.getFullDays(stored.freeDay)}
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
        <button onClick={startEditCallback} >Edit</button>
    </div>   
    </div>  
    );
   }

