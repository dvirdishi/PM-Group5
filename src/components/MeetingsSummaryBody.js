import React from 'react';
import { useNavigate } from "react-router-dom";

const MeetingsSummaryBody = ({ tableData, columns }) => {
  const navigate = useNavigate();
  var today = new Date();//Current date variable
  today = today.toDateString()
    return (
      <tbody>
        {tableData.map((data) => {
          const updateDocument_edit = () => {
            navigate("/MeetingsSummaryEdit/"+ data.id);
          };
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                if(data.isdeleted == "0")
                {
                  if(accessor == "summary_button")
                  {
                    return <button className="button_edit" key={accessor} onClick={updateDocument_edit}>Edit</button>;
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

export default MeetingsSummaryBody;