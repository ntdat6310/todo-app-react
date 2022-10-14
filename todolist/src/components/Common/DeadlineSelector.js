import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDateString } from "../../utils/date";

export default function DeadlineSelector(props) {
  const [startDate, setStartDate] = useState(() => {
    return props.startDate ? props.startDate : new Date();
  });
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
    props.onDeadlineChange(e);
  };

  return (
    <div className="col-2 text-center">
      <button
        className="btn btn-secondary position-relative mb-2"
        onClick={handleClick}
      >
        <i className="fa fa-calendar" aria-hidden="true" />
        &nbsp; Deadline
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {getDateString(startDate)}
        </span>
      </button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
    </div>
  );
}
