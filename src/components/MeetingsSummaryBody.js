import React from 'react';
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MeetingsSummaryBody = ({ tableData, columns }) => {
  const navigate = useNavigate();
  var today = new Date();//Current date variable
  today = today.toDateString()
    return (
      <tbody>
        {tableData.map((data) => {
          const updateDocument_edit = async () => 
          {
              
            }
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                  if(accessor == "button")
                  {
                    return <button className="button_edit" key={accessor} onClick={updateDocument_edit}>Edit</button>;
                  }
                  else
                  {
                    return <td className="table_row_white" key={accessor}>{tData}</td>;
                  }
                
              })}
            </tr>
          );
        })}
      </tbody>
    );
};

export default MeetingsSummaryBody;