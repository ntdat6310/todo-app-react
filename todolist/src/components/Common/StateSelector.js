import React from "react";
import { useState } from "react";

// State :
// 0 - To do
// 1 - Doing
// 2 - Done
export default function StateSelector(props) {
  const state = props.state ? props.state : 0;

  const styleItem = {
    cursor: "pointer",
  };

  const handleClick = (newState) => {
    props.onStateChange(newState);
  };

  const renderState = () => {
    if (state === 0) return "To do";
    if (state === 1) return "Doing";
    if (state === 2) return "Done";
  };

  return (
    <div className="col-2 text-center">
      <div className="dropdown ">
        <button
          className="btn btn-secondary dropdown-toggle position-relative"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          State
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {renderState()}
          </span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li
            className="dropdown-item"
            style={styleItem}
            onClick={() => {
              handleClick(0);
            }}
          >
            To do
          </li>
          <li
            className="dropdown-item"
            style={styleItem}
            onClick={() => {
              handleClick(1);
            }}
          >
            Doing
          </li>
          <li
            className="dropdown-item"
            style={styleItem}
            onClick={() => {
              handleClick(2);
            }}
          >
            Done
          </li>
        </ul>
      </div>
    </div>
  );
}
