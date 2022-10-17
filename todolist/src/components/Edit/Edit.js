import React, { useState } from "react";
import EditForm from "../Modal/EditForm";

export default function Edit(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-secondary me-2"
        onClick={() => {
          openModal();
        }}
      >
        <i className="fa fa-pencil-square-o" />
      </button>
      <EditForm
        isOpen={isOpen}
        closeModal={closeModal}
        onEditSubmit={props.onEditSubmit}
        initTask={props.task}
        stateSelected = {props.stateSelected}
      />
    </>
  );
}
