import React from "react";
import { useState } from "react";
// Level:
// 0 - Small
// 1 - Medium
// 2 - High
export default function LevelSelector(props) {
  const level = props.level ? props.level : 0;

  const styleItem = {
    cursor: "pointer",
  };

  const handleClick = (value) => {
    props.onLevelChange(value);
  };

  const renderLevel = () => {
    if (level === 0) return "Small";
    if (level === 1) return "Medium";
    if (level === 2) return "High";
  };

  return (
    <div className="col-2 text-center">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle position-relative"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Level
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {renderLevel()}
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
            Small
          </li>
          <li
            className="dropdown-item"
            style={styleItem}
            onClick={() => {
              handleClick(1);
            }}
          >
            Medium
          </li>
          <li
            className="dropdown-item"
            style={styleItem}
            onClick={() => {
              handleClick(2);
            }}
          >
            High
          </li>
        </ul>
      </div>
    </div>
  );
}
