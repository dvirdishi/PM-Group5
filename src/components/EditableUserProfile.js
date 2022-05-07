import React,{ useState, useEffect } from 'react';
import Group from './Group';
import { months } from '../tools';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db} from "../firebase";



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

export default function EditableUserProfile({stored,editCompleteCallback}) {

    console.log("Edit User Profile");
    const [nameos, setName] = useState(stored.nameos);
    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);
    const [year, setYear] = useState(stored.year);
    const [email, setEmail] = useState(stored.email);
    const [address, setAddress] = useState(stored.address);
    const [private_phone, setPhone] = useState(stored.private_phone);
    const [speciality, setSpec] = useState(stored.speciality);
    const [treatment, setTreat] = useState(stored.treatment);
    const [clinic_phone, setClinicPhone] = useState(stored.clinic_phone);

    const [user, loading] = useAuthState(auth);

    const updateDocument = async () => 
    {
        {
          const ref = doc(db, "users", user.uid);
          await updateDoc(ref, 
            {
                name: nameos,
                email: email,
                day: day,
                month: month,
                year: year,
                speciality: speciality,
                treatment: treatment,
                private_phone: private_phone,
                clinic_phone: clinic_phone,
                address: address,
          });
        }
      }

    useEffect(() => {
        if (loading) return;
    }, [user, loading]);


    const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        console.log("Cancelled");
        editCompleteCallback(null);
    }
    function handleSaveClicked() {
        console.log("Saved");
        updateDocument();
        editCompleteCallback({nameos, month, day, year, email, address, private_phone, speciality, treatment, clinic_phone});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);


    // add as group
    if(stored.isdoctor==1){
    return (<div>
        <div>
        <h1_dash>Account Settings</h1_dash>
        <Group>
            <h2_dash>Name:</h2_dash>
            <input
                type='text'
                value={nameos}
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
            <h2_dash>Private Phone:</h2_dash>
            <input
                type='text'
                value={private_phone}
                onChange={e => setPhone(e.target.value)}
            />
        </Group>
        </div>
<br></br>
        <div>
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
            <h2_dash>Clinic Phone:</h2_dash>
            <input
                type='text'
                value={clinic_phone}
                onChange={e => setClinicPhone(e.target.value)}
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
            <div className="btn-group-dash">
                <button onClick={handleSaveClicked}>Save</button>
                <button onClick={handleCancelClicked}>Cancel</button>
            </div>
    </div>
    );
    }
    if(stored.isdoctor==0){
        return (<div>
            <div>
            <h1_dash>Account Settings</h1_dash>
            <Group>
                <h2_dash>Name:</h2_dash>
                <input
                    type='text'
                    value={nameos}
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
                <h2_dash>Private Phone:</h2_dash>
                <input
                    type='text'
                    value={private_phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </Group>
            </div>
                <div className="btn-group-dash">
                    <button onClick={handleSaveClicked}>Save</button>
                    <button onClick={handleCancelClicked}>Cancel</button>
                </div>
        </div>
        );
        }
}