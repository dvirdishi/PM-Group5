import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
export default class Search extends Component {
    data = [
        {
            key: "Aviya",
            value: "Aviya David",
        },
        {
            key: "Ofek",
            value: "Ofek Elgozi",
        },
        {
            key: "Dvir",
            value: "Dvir Dishi",
        },
        {
            key: "Niran",
            value: "Niran Dishi",
        },
        {
            key: "karius",
            value: "Karius",
        },
    ];

    render() {
        return (
            <ReactSearchBox
                leftIcon={"👨‍⚕️"}
                placeholder="Search Doctor By Name"
                value="Doe"
                data={this.data}
                // callback={(record) => console.log(record)}
                onSelect={ () =>   window.location.replace('/schedule')}


            />
        );
    }
}