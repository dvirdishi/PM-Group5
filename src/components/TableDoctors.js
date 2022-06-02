import React from 'react';
import { useState, useEffect } from "react";
import TableDoctorBody from "./TableDoctorBody";
import TableDoctorHead from "./TableDoctorHead";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../index.css";

const TableDoctors = () => {
  const [tableData, setTableData] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const getAllDocs = async () => 
  {
      const querySnapshot = await getDocs(collection(db, "users"));
      let i = 0;
      let tempData = []
      querySnapshot.forEach((doc) => {
        if(doc.data().isdoctor == "1")
        {
          tempData.push(doc.data());
          tempData[i].id = doc.id;
          i++;
        }
      });
      return tempData;
  }
  
  useEffect( () => {
    getAllDocs().then(res => setTableData(res));
   }, [])
 
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    if(user && user.email == "donacontactmail@gmail.com") return navigate("/Adminpanel");
  }, [user, loading]);


  const columns = [
    { label: "Doctor's Name", accessor: "name", sortable: true },
    { label: "Email", accessor: "email", sortable: true },
    { label: "Birthday(Month)", accessor: "month", sortable: true },
    { label: "Speciality", accessor: "speciality", sortable: true },
    { label: "Treatment", accessor: "treatment", sortable: true },
    { label: "Private Phone", accessor: "private_phone", sortable: true },
    { label: "Clinic Phone", accessor: "clinic_phone", sortable: true },
    { label: "Clinic Address", accessor: "address", sortable: true },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <>
    <br></br>
      <table className="admin_table">
        <TableDoctorHead {...{ columns, handleSorting }} />
        <TableDoctorBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default TableDoctors;