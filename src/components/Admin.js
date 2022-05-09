import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import TableDoctors from "./TableDoctors";
import { auth } from "../firebase";
import "../index.css";

function Admin() {

  const add_doctor = () => {
    navigate("/RegisterDoctor");
  };

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user && user.email != "donacontactmail@gmail.com") navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
       <button className="Admin_btn" type="submit" onClick={add_doctor}>Add Doctor</button>
       <br></br>
       <TableDoctors />
     </div>
  );
}
export default Admin;