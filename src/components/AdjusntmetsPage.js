//for page
import React from 'react';
import months from '../months';



export default function CalendarAdjustments({stored, startEditCallback }) {
    return(
        <div>
            <br></br>
        <h3 className='h3_adj'>Day-off</h3>
        <div className= 'workdays'>
        {months.getFullDays(stored.freeDay)}
    </div>
            <h3 className='h3_adj'>Vacantion</h3>
            <div className='datesgrid'>
            <div className= 'vacDate'>
            <input readOnly
                type='date'
                value={stored.VactionFrom}
                
            />
            

            </div>
            <h3>-</h3>
            <div className= 'vacDate'>
            <input readOnly
                type='date'
                value={stored.VactionUntil}
            />
            </div>
       </div>
       <br></br>
       <h3 className='h3_adj'>Appointment Settings</h3>

            <div className='appoint'>
            <div className= 'appoint_thing'>
            <h4>Face to Face</h4>
            </div>
            <div className= 'appoint_thing'>
            <input readOnly
                type='number'
                placeholder='Duration'
                value={stored.durationOne}
                style={{width: "50px"}}

            />
            </div>
       </div>
       <div className='appoint'>
            <div className= 'appoint_thing'>
            <h4>Zoom</h4>
            </div>
            <div className= 'appoint_thing'>
            <input readOnly
                type='number'
                placeholder='Duration'
                value={stored.durationTwo}
                style={{width: "50px"}}

            />
            </div>
       </div>
       <br></br>
    <div className="btn-group-adj">
        <button className='adj_btn' onClick={startEditCallback} >Edit</button>
    </div>   
    </div>  
    );
   }

