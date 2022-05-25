import React from 'react';

const MeetingsSummary = ({ tableData, columns }) => {
    var today = new Date();//Current date variable
    today = today.toDateString()
    return (
        <tbody>
        {tableData.map((data) => {
            return (
                <tr key={data.id}>
                    {columns.map(({ accessor }) => {
                        const tData = data[accessor] ? data[accessor] : "——";
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
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default MeetingsSummary;