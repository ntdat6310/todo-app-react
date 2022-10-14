import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DeadlineSelector from "./Common/DeadlineSelector";
import LevelSelector from "./Common/LevelSelector";
import StateSelector from "./Common/StateSelector";
const { v4: uuidv4 } = require("uuid");

export default function ModalAdd(props) {
  Modal.setAppElement(document.getElementById("root"));
  const { isOpen, closeModal } = props;
  const defaultNewTask = {
    id: uuidv4(),
    task: "",
    level: 0,
    state: 0,
    deadline: new Date(),
  };
  const [newTask, setNewTask] = useState(defaultNewTask);

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

  const onSubmit = () => {
    props.onSubmitAdd(newTask);
    setNewTask(defaultNewTask);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Task"
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
        onClick={closeModal}
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
          deadline={newTask.deadline}
          startDate={new Date()}
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
