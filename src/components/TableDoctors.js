import React from 'react';
import { useState, useEffect } from "react";
import mockdata from "../doctors.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "../index.css";

const TableDoctors = () => {
  const [tableData, setTableData] = useState(mockdata);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    if(user && user.email == "donacontactmail@gmail.com") return navigate("/Adminpanel");
  }, [user, loading]);


  const columns = [
    { label: "Doctor's Name", accessor: "Name", sortable: true },
    { label: "Email", accessor: "Email", sortable: true },
    { label: "Birthday", accessor: "Date", sortable: true },
    { label: "Speciality", accessor: "Speciality", sortable: true },
    { label: "Treatment", accessor: "Treatment", sortable: true },
    { label: "Private Phone", accessor: "Private Phone", sortable: true },
    { label: "Clinic Phone", accessor: "Clinic Phone", sortable: true },
    { label: "Clinic Address", accessor: "Clinic Address", sortable: true },
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
      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default TableDoctors;