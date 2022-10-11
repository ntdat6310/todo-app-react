import React from "react";
import ModalAdd from "./ModalAdd";
import { useState } from "react";

export default function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={openModal}
      >
        <i className="fa fa-plus-circle" aria-hidden={true} /> Add Task
      </button>
      <ModalAdd isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
