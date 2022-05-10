import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { auth, registerNewDoctor} from "../firebase";
import { useNavigate } from 'react-router-dom';
import "../index.css";
function RegisterDoctor() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [clinic_phone, setClinicPhone] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [treatment, setTreatment] = useState("");
  const [address, setAddress] = useState("");
  const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    if(password==password2) 
    {
      let regExp = /[A-Z]/;
      let isMatch = regExp.test(password)
      let result = isMatch ? "Yes" : "No";
      if(password.length < 8 || result == "No")
      {
        alert("Password Must Be At Least 8 Chars Long And Contain Capital Letter");
      }
      else 
      {
        registerNewDoctor(name, email, password, clinic_phone, speciality, treatment, address);
      }
    }
    else alert("Passwords Field Are Not The Same, Pleaes Enter Again.");
  };
  
  useEffect(() => {
    if (loading) return;
    if (user && user.email != "donacontactmail@gmail.com") navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className="register__textBox"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Re-Password"
        />
        <input
          type="number"
          className="register__textBox"
          value={clinic_phone}
          onChange={(e) => setClinicPhone(e.target.value)}
          placeholder="Clinic Phone"
        />
        <input
          type="text"
          className="register__textBox"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          placeholder="Speciality"
        />
        <input
          type="text"
          className="register__textBox"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          placeholder="Treatment"
        />
        <input
          type="text"
          className="register__textBox"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Clinic Address"
        />
        <button className="register__btn" onClick={register}>
          Add Doctor
        </button>
      </div>
    </div>
  );
}
export default RegisterDoctor;