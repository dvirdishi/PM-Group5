// add variables in lines 13-29
import React from 'react';
import Group from './Group';
import { months } from '../tools';


export default function EditableUserProfile({stored, startEditCallback }) {

    console.log()
//inside div, add another field, copy from name and adjust
if(stored.isdoctor==1)
        {
            return(
                <div>
                <div>
                <h1 className="h1_dash">Account Settings</h1>
                <Group>
                    <h2 className="h2_dash">Name:</h2> {stored.nameos}
                </Group>
                <Group>
                    <h2 className="h2_dash">Birthday:</h2> {months.getShortName(stored.month)} {stored.day} {stored.year}
                </Group>
                <Group>
                    <h2 className="h2_dash">Email:</h2> {stored.email}
                </Group>
                <Group>
                    <h2 className="h2_dash">Private Phone:</h2> {stored.private_phone}
                </Group>
                </div>

                
                
            <div>
            <h1 className="h1_dash">Clinic Settings</h1>
            <Group>
                <h2 className="h2_dash">Address:</h2> {stored.address}
            </Group>
            <Group>
                <h2 className="h2_dash">Clinic Phone:</h2> {stored.clinic_phone}
            </Group>
            <Group>
                <h2 className="h2_dash">Speciality:</h2> {stored.speciality}
            </Group>
            <Group>
                <h2 className="h2_dash">Treatment:</h2> {stored.treatment}
            </Group>
        </div>
        <div>
                <button className= "button_dash"
                    onClick={startEditCallback}
                >Edit</button>
            </div>
        </div>)
        }

if(stored.isdoctor==0){
   return (<div>
        <div>
        <h1 className="h1_dash">Account Settings</h1>
        <Group>
            <h2 className="h2_dash">Name:</h2> {stored.nameos}
        </Group>
        <Group>
            <h2 className="h2_dash">Birthday:</h2> {months.getShortName(stored.month)} {stored.day} {stored.year}
        </Group>
        <Group>
            <h2 className="h2_dash">Email:</h2> {stored.email}
        </Group>
        <Group>
            <h2 className="h2_dash">Private Phone:</h2> {stored.private_phone}
        </Group>
        </div>
        <div>
                <button className= "button_dash" onClick={startEditCallback} >Edit</button>
            </div>
    </div>
        
    );
   }
}
