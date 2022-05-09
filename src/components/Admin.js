import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "../index.css";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user && user.email != "donacontactmail@gmail.com") navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
       
     </div>
  );
}
export default Dashboard;