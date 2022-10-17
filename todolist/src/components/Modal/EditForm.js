import React, { useState, useRef } from "react";
import Modal from "react-modal";
import DeadlineSelector from "../Common/DeadlineSelector";
import LevelSelector from "../Common/LevelSelector";
import StateSelector from "../Common/StateSelector";

export default function EditForm(props) {
  const [newTask, setNewTask] = useState(props.initTask);
  const stateFromItem = useRef();
  
  stateFromItem.current = props.stateSelected;
  let isModalOpen = props.isOpen;
  
  const onSubmit = () => {
    props.closeModal();
    props.onEditSubmit(newTask);
  };

  const onClose = () => {
    props.closeModal();
  };

  const onLevelChange = (newLevel) => {
    setNewTask((prev) => {
      return { ...prev, level: newLevel };
    });
  };

  const onStateChange = (newState) => {
    setNewTask((prev) => {
      return { ...prev, state: newState };
    });
  };

  const onDeadlineChange = (newDeadline) => {
    setNewTask((prev) => {
      return { ...prev, deadline: newDeadline };
    });
  };

  if (!isModalOpen && stateFromItem.current !== newTask.state) {
    setNewTask((prevTask) => {
      return { ...prevTask, state: stateFromItem.current };
    });
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Task"
      style={{
        overlay: {
          zIndex: "100",
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {},
      }}
    >
      {/* Close Modal */}
      <div
        className="modalAdd__close"
        onClick={() => {
          onClose();
        }}
        style={{
          float: "right",
          fontSize: "20px",
          padding: "8px",
          fontWeight: "normal",
          cursor: "pointer",
        }}
      >
        <i className="fa fa-times" aria-hidden="true" />
      </div>

      {/* Task */}
      <div className="mb-3">
        <label
          htmlFor="taskTextarea"
          className="form-label"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Task
        </label>
        <textarea
          className="form-control"
          id="taskTextarea"
          rows={6}
          value={newTask.task}
          onChange={(e) => {
            setNewTask({ ...newTask, task: e.target.value });
          }}
          style={{ fontSize: "20px" }}
        />
      </div>

      <div className="row mt-4">
        <LevelSelector level={newTask.level} onLevelChange={onLevelChange} />
        <DeadlineSelector
          startDate={new Date(newTask.deadline)}
          onDeadlineChange={onDeadlineChange}
        />
        <StateSelector state={newTask.state} onStateChange={onStateChange} />
      </div>

      {/* Submit */}
      <div className="row mt-4">
        <div className="col-12">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}
