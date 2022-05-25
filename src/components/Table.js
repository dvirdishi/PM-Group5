import React from 'react';
import { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../index.css";

const Table = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [counter, setCounter] = useState(0);
 
  const getAllDocs = async () => 
  {
      const querySnapshot = await getDocs(collection(db, "appointments"));
      let i = 0;
      let tempData = []
      let temp = 0;
      querySnapshot.forEach((doc) => {
        if(user.uid == doc.data().cid || user.uid == doc.data().did)
        {
          tempData.push(doc.data());
          tempData[i].id = doc.id;
          if(doc.data().isdeleted == "0")
          {
            temp = temp+1;
            setCounter(temp);
          }
        }
      i++;
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
    { label: "Doctor's Name", accessor: "did", sortable: true },
    { label: "Client's Name", accessor: "cid", sortable: true },
    { label: "Date", accessor: "date", sortable: true },
    { label: "Hour", accessor: "hour", sortable: true },
    { label: "Duration", accessor: "duration", sortable: true },
    { label: "Type", accessor: "type", sortable: true },
    { label: "Cancel", accessor: "button", sortable: true },
    
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
    <h1 className="MeetingsCounter">Meetings: {counter.toString()}</h1>
    <br></br>
      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;