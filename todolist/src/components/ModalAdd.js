import React from "react";
import Modal from "react-modal";
import { useState } from "react";

export default function ModalAdd(props) {
  Modal.setAppElement(document.getElementById("root"));
  const { isOpen, closeModal } = props;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}
