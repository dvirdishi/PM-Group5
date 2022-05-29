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
                <h1_dash>Account Settings</h1_dash>
                <Group>
                    <h2_dash>Name:</h2_dash> {stored.nameos}
                </Group>
                <Group>
                    <h2_dash>Birthday:</h2_dash> {months.getShortName(stored.month)} {stored.day} {stored.year}
                </Group>
                <Group>
                    <h2_dash>Email:</h2_dash> {stored.email}
                </Group>
                <Group>
                    <h2_dash>Private Phone:</h2_dash> {stored.private_phone}
                </Group>
                </div>

                
                
            <div>
            <h1_dash>Clinic Settings</h1_dash>
            <Group>
                <h2_dash>Address:</h2_dash> {stored.address}
            </Group>
            <Group>
                <h2_dash>Clinic Phone:</h2_dash> {stored.clinic_phone}
            </Group>
            <Group>
                <h2_dash>Speciality:</h2_dash> {stored.speciality}
            </Group>
            <Group>
                <h2_dash>Treatment:</h2_dash> {stored.treatment}
            </Group>
        </div>
        <div>
                <button_dash
                    onClick={startEditCallback}
                >Edit</button_dash>
            </div>
        </div>)
        }

if(stored.isdoctor==0){
   return (<div>
        <div>
        <h1_dash>Account Settings</h1_dash>
        <Group>
            <h2_dash>Name:</h2_dash> {stored.nameos}
        </Group>
        <Group>
            <h2_dash>Birthday:</h2_dash> {months.getShortName(stored.month)} {stored.day} {stored.year}
        </Group>
        <Group>
            <h2_dash>Email:</h2_dash> {stored.email}
        </Group>
        <Group>
            <h2_dash>Private Phone:</h2_dash> {stored.private_phone}
        </Group>
        </div>
        <div>
                <button_dash onClick={startEditCallback} >Edit</button_dash>
            </div>
    </div>
        
    );
   }
}
