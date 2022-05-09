import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, registerWithEmailAndPassword} from "../firebase";
import { useNavigate } from "react-router-dom";
import "../index.css";
function Register() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
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
        registerWithEmailAndPassword(name, email, password);
      }
    }
    else alert("Passwords Field Are Not The Same, Pleaes Enter Again.");
  };
  
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
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
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;