import React, { useState } from "react";
import { getDaysLeft, getDeadlineString } from "../utils/date";
import StateSelectorOutline from "./Common/StateSelectorOutline";
import Edit from "../components/Edit/Edit";
import Delete from "../components/Delete/Delete";

export default function Item(props) {
  const task = props.task;

  const handleStateChange = (newState) => {
    props.onStateChange({ ...task, state: newState });
  };

  function renderDeadline() {
    const daysLeft = getDaysLeft(new Date(task.deadline));
    let deadlineString = getDeadlineString(daysLeft);

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
    let levelClassBs5 = "bg-danger";
    let levelString = "High";
    if (lv === 0) {
      levelClassBs5 = "bg-secondary";
      levelString = "Small";
    }
    if (lv === 1) {
      levelClassBs5 = "bg-primary";
      levelString = "Medium";
    }
    return <span className={`badge ${levelClassBs5} p-2`}>{levelString}</span>;
  }

  return (
    <tr>
      <td>{task.task}</td>
      {renderDeadline()}
      <td>
        <StateSelectorOutline
          state={task.state}
          onStateChange={handleStateChange}
        />
      </td>
      <td>{renderLevel(task.level)}</td>
      <td>
        <Edit />
        <Delete taskId={task.id} onDeleteSubmit={props.onDeleteSubmit} />
      </td>
    </tr>
  );
}
