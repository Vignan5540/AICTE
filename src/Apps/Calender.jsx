import React from "react";
import PageHeader from "../components/common/Pageheader";
import BigCalendar from "./BigCalender";

function Calender() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Calendar" />
            <div className="row clearfix g-3">
                <BigCalendar />
            </div>
        </div>     
    )
}


export default Calender;