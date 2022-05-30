import React from 'react';
import { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import "../index.css";


const Table = () => {
  const [user, loading] = useAuthState(auth);
  const [Temp_isdoctor,setIsDoctor] = useState([]);
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [counter, setCounter] = useState(0);

  const fetchUserName = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    setIsDoctor(data.isdoctor);
    };

    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/login");
      if(user && user.email == "donacontactmail@gmail.com") return navigate("/Adminpanel");
      fetchUserName();
    }, [user, loading]);
 
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
          i++;
        }
      });
      return tempData;
  }
  
  useEffect( () => {
    getAllDocs().then(res => setTableData(res));
   }, [])


  const columns = [
    { label: "Doctor's Name", accessor: "did", sortable: true },
    { label: "Client's Name", accessor: "cid", sortable: true },
    { label: "Date", accessor: "date", sortable: true },
    { label: "Hour", accessor: "hour", sortable: true },
    { label: "Duration", accessor: "duration", sortable: true },
    { label: "Type", accessor: "type", sortable: true },
    { label: "Edit/Delete", accessor: "button", sortable: false },
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

  const DownloadAtt = () => {
    // let dataCopy=Table().tableData;
    // console.log(dataCopy[1].did);
    var today = new Date();



    const downloadTxtFile = () => {
      let TodayClients="Clients Of Today's List:\n";

      for (let i = 0; i < tableData.length; i++) {
        if(tableData[i].date==today.toDateString())
        {
          TodayClients += tableData[i].did + "\n";
        }
      }
      const element = document.createElement("a");
      const file = new Blob([TodayClients], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "Clients Of Today List.txt";
      document.body.appendChild(element);
      element.click();
    };

    return (
        <div>
          <button onClick={downloadTxtFile} style={{marginLeft:-15, backgroundColor:"lightblue" } }>Download Todays Meeting TXT File</button>
        </div>
    );
  };

  
  if(Temp_isdoctor == "1")
  {
    return (
      <>
      <br></br>
      <h1 className="MeetingsCounter">Meetings: {counter.toString()}</h1>
      <br></br>
        <h2 className="MeetingsCounter">{DownloadAtt()}</h2>
        <br></br>
        <table className="table">
          <TableHead {...{ columns, handleSorting }} />
          <TableBody {...{ columns, tableData }} />
        </table>
      </>
    );
  }
  else
  {
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
  }
};

export default Table;