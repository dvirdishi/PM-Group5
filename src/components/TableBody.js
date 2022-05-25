import React from 'react';
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const TableBody = ({ tableData, columns }) => {
  const navigate = useNavigate();
  var today = new Date();//Current date variable
  today = today.toDateString()
    return (
      <tbody>
        {tableData.map((data) => {
            const updateDocument_edit = () => {
              navigate("/ScheduleEdit/"+ data.id);
            };
            const updateDocument_delete = async () => 
            {
              {
                const ref = doc(db, "appointments", data.id);
                await updateDoc(ref, 
                  {
                    isdeleted: "1",
                });
              }
              alert("Meeting Deleted.");
              navigate("/");
            }
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                if(data.isdeleted == "0")
                {
                  if(accessor == "button")
                  {
                    return <div>
                      <button className="button_cancel" key={accessor} onClick={updateDocument_delete}>Delete</button>;
                      <button className="button_edit" key={accessor} onClick={updateDocument_edit}>Edit</button>;
                    </div>
                  }
                  if(accessor == "date" && Date.parse(data[accessor]) < Date.parse(today))
                  {
                    return <td className="table_row_red" key={accessor}>{tData}</td>;
                  }
                  else if(accessor == "date" && Date.parse(data[accessor]) > Date.parse(today))
                  {
                    return <td className="table_row_green" key={accessor}>{tData}</td>;
                  }
                  else if(accessor == "date" && Date.parse(data[accessor]) == Date.parse(today))
                  {
                    return <td className="table_row_grey" key={accessor}>{tData}</td>;
                  }
                  else
                  {
                    return <td className="table_row_white" key={accessor}>{tData}</td>;
                  }
                }
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  
  export default TableBody;