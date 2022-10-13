import React from "react";

export default function Order() {
  return (
    <div className="btn-group me-2">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close={true}
        aria-expanded={false}
      >
        Order by
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            <i className="fa-thin fa-arrow-up" /> Task
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="fa-thin fa-arrow-down" /> Task
          </a>
        </li>
        <hr />
        <li>
          <a className="dropdown-item" href="#">
            <i className="fa-thin fa-arrow-up" /> Deadline
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="fa-thin fa-arrow-down" /> Deadline
          </a>
        </li>
      </ul>
    </div>
  );
}
