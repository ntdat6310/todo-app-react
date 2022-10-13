import React from "react";

export default function StateSelectorOutline(props) {
  const styleOption = {
    cursor: "pointer",
  };
  let stateStr = "Done";
  let btnColorBS5 = null;
  if (props.state === 0) {
    stateStr = "To do";
    btnColorBS5 = "btn-outline-primary";
  } else if (props.state === 1) {
    stateStr = "Doing";
    btnColorBS5 = "btn-outline-danger";
  } else {
    stateStr = "Done";
    btnColorBS5 = "btn-outline-secondary";
  }

  const onStateChange = (value) => {
    // Để cho BS5 nó close cái popup select option xong mới render lại
    // Nếu ko => Render liền => cái popup ko close đc!
    setTimeout(() => {
      props.onStateChange(value);
    }, 100);
  };

  return (
    <div className="dropdown">
      <button
        className={`btn ${btnColorBS5} dropdown-toggle`}
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        {stateStr}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li
          className="dropdown-item"
          style={styleOption}
          onClick={() => {
            onStateChange(0);
          }}
        >
          <i className="fa-battery-empty" /> Todo
        </li>
        <li
          className="dropdown-item"
          style={styleOption}
          onClick={() => {
            onStateChange(1);
          }}
        >
          <i className="fa-battery-quarter" /> Doing
        </li>
        <li
          className="dropdown-item"
          style={styleOption}
          onClick={() => {
            onStateChange(2);
          }}
        >
          <i className="fa-battery-full" /> Done
        </li>
      </ul>
    </div>
  );
}
