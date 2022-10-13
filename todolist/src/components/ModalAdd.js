import React from "react";
import Modal from "react-modal";
import DeadlineSelector from "./Common/DeadlineSelector";
import LevelSelector from "./Common/LevelSelector";
import StateSelector from "./Common/StateSelector";
const { v4: uuidv4 } = require("uuid");

export default function ModalAdd(props) {
  Modal.setAppElement(document.getElementById("root"));
  const { isOpen, closeModal } = props;
  const task = {
    id: uuidv4(),
    task: "",
    level: 0,
    state: 0,
    deadline: new Date(),
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
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
          defaultValue={""}
          style={{ fontSize: "20px" }}
        />
      </div>

      <div className="row mt-4">
        <LevelSelector />
        <DeadlineSelector startDate={new Date("10/14/2022")} />
        <StateSelector />
      </div>

      {/* Submit */}
      <div className="row mt-4">
        <div className="col-12">
          <button className="btn btn-primary w-100" onClick={closeModal}>
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}
