import React from "react";
import { useState } from "react";
import { getDaysLeft, getDeadlineString } from "../utils/date";
import StateSelector from "./Common/StateSelector";
import StateSelectorOutline from "./Common/StateSelectorOutline";

export default function Item(props) {
  const { idx, taskName, level, state, deadline } = props;
  const [task, setTask] = useState({
    taskName,
    level,
    state,
    deadline,
  });

  const handleStateChange = (value) => {
    console.log(value);
    setTask((prevTask) => {
      return { ...prevTask, state: value };
    });
  };

  function renderDeadline() {
    const daysLeft = getDaysLeft(new Date(deadline));
    let deadlineString = getDeadlineString(getDaysLeft(new Date(deadline)));

    let deadlineClassBs5 = "text-secondary";
    if (daysLeft >= 0 && daysLeft <= 3) {
      deadlineClassBs5 = "text-danger";
    } else if (daysLeft < 0) {
      deadlineClassBs5 = "text-danger fw-bold";
      if (task.state === 2) {
        deadlineString = "Hoàn thành";
      }
    }
    if (task.state === 2) {
      deadlineClassBs5 = "text-secondary";
    }

    return <td className={deadlineClassBs5}>{deadlineString}</td>;
  }
  
  function renderLevel(lv) {
    if (lv === 0) {
      return <span className="badge bg-secondary p-2">Small</span>;
    }
    if (lv === 1) {
      return <span className="badge bg-primary p-2">Medium</span>;
    }
    if (lv === 2) {
      return <span className="badge bg-danger p-2">High</span>;
    }
  }

  return (
    <tr>
      <td>{task.taskName}</td>
      {renderDeadline()}
      <td>
        <StateSelectorOutline state={task.state} onStateChange={handleStateChange} />
      </td>
      <td>{renderLevel(level)}</td>
      <td>
        <button type="button" className="btn btn-outline-secondary me-2">
          <i className="fa fa-pencil-square-o" />
        </button>
        <button type="button" className="btn btn-outline-danger">
          <i className="fa-trash-o" />
        </button>
      </td>
    </tr>
  );
}
