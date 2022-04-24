//add variable in lines 33, 42, 89
import React,{ useState, useEffect } from 'react';
import Group from './Group';
import { months } from '../tools';

function renderMonthOptions() {
    return months.getMonths().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.shortName}
        </option>
    });
}

function bound(value, floor, ceil) {
    return Math.min(ceil, Math.max(value, floor));
}

export default function EditableUserProfile({
                                                stored,
                                                editCompleteCallback
                                            }) {

    console.log("Edit User Profile");
// add as const variable
    const [name, setName] = useState(stored.name);
    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);
    const [year, setYear] = useState(stored.year);
    const [email, setEmail] = useState(stored.email);
    const [oldPassword, setOldPass] = useState(stored.oldPassword);
    const [newPassword, setNewPass] = useState(stored.newPassword);
    const [rePassword, setRePass] = useState(stored.rePassword);
    const [address, setAddress] = useState(stored.address);
    const [phone, setPhone] = useState(stored.phone);
    const [speciality, setSpec] = useState(stored.speciality);
    const [treatment, setTreat] = useState(stored.treatment);
// add as const variable
    const maxDay = months.getMaxDays(month);



    function handleSaveClicked() {
        console.log("Saved");
        // add inside the parentheses
        editCompleteCallback({name, month, day, year, speciality});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);
    // add as group
    return (<div>
        <div>
        <h1_dash>Account Settings</h1_dash>
        <Group>
            <h2_dash>Name:</h2_dash>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </Group>

        <Group>
            <h2_dash>Birthday:</h2_dash>

            <select
                value={month}
                onChange={e => setMonth(bound(e.target.value, 0, 11))}
            >
                {renderMonthOptions()}
            </select>
            <input
                type='number'
                value={day}
                onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                style={{width: "50px"}}
            />
            <input
                type='number'
                value={year}
                onChange={e => setYear(bound(e.target.value, 1900, 2022))}
                style={{width: "60px"}}
            />
        </Group>
        <Group>
            <h2_dash>Email:</h2_dash>
            <input
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </Group>
        <Group>
            <h2_dash>Old Password:</h2_dash>
            <input
                type='password'
                value={oldPassword}
                onChange={e => setOldPass(e.target.value)}
            />
        </Group>
        <Group>
            <h2_dash>New Password:</h2_dash>
            <input
                type='password'
                value={newPassword}
                onChange={e => setNewPass(e.target.value)}/>
        </Group>
        <Group>
            <h2_dash>Re-enter Password:</h2_dash>
            <input
                type='password'
                value={rePassword}
                onChange={e => setRePass(e.target.value)}/>
        </Group>
        </div>

        <div style={{margin: "-15px"}}>
        <h1_dash>Clinic Settings</h1_dash>
        <Group>
            <h2_dash>Address:</h2_dash>
            <input
                type='text'
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
        </Group>
        <Group>
            <h2_dash>Phone:</h2_dash>
            <input
                type='text'
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
        </Group>
        <Group>
            <h2_dash>Speciality:</h2_dash>
            <input
                type='text'
                value={speciality}
                onChange={e => setSpec(e.target.value)}
            />
        </Group>
        <Group>
            <h2_dash>Treatment:</h2_dash>
            <input
                type='text'
                value={treatment}
                onChange={e => setTreat(e.target.value)}
            />
        </Group>
        </div>
            <div>
                <Group><button_dash onClick={handleSaveClicked}>Save</button_dash></Group>
            </div>
    </div>
    );
}