import React from "react";

export default function Order(props) {
  const style = {
    cursor: "pointer",
  };
  const onItemClicked = (orderSelected) => {
    props.onOrderChange(orderSelected);
  };

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
        <li
          className={`dropdown-item ${
            props.order.taskOrder === "asc" ? "text-danger" : ""
          }`}
          style={style}
          onClick={() => {
            onItemClicked({ taskOrder: "asc" });
          }}
        >
          <i className="fa-thin fa-arrow-up" /> Task
        </li>

        <li
          className={`dropdown-item ${
            props.order.taskOrder === "desc" ? "text-danger" : ""
          }`}
          style={style}
          onClick={() => {
            onItemClicked({ taskOrder: "desc" });
          }}
        >
          <i className="fa-thin fa-arrow-down" /> Task
        </li>

        <hr />

        <li
          className={`dropdown-item ${
            props.order.deadlineOrder === "asc" ? "text-danger" : ""
          }`}
          style={style}
          onClick={() => {
            onItemClicked({ deadlineOrder: "asc" });
          }}
        >
          <i className="fa-thin fa-arrow-up" /> Deadline
        </li>

        <li
          className={`dropdown-item ${
            props.order.deadlineOrder === "desc" ? "text-danger" : ""
          }`}
          style={style}
          onClick={() => {
            onItemClicked({ deadlineOrder: "desc" });
          }}
        >
          <i className="fa-thin fa-arrow-down" /> Deadline
        </li>
      </ul>
    </div>
  );
}
