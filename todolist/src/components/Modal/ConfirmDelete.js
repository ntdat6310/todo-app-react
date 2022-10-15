import React from "react";
import Modal from "react-modal";

export default function ConfirmDelete(props) {
  Modal.setAppElement(document.getElementById("root"));

  const onClose = () => {
    props.onDeleteCancel();
  };

  const onSubmit = () => {
    props.onDeleteSubmit();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onDeleteCancel}
      style={{
        overlay: {
          zIndex: "100",
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
          borderRadius: "20px",
          inset: "195px 200px",
          fontSize: "20px",
        },
      }}
    >
      <div
        style={{
          margin: "auto 0",
        }}
      >
        <h2 className="text-danger text-center">Warning</h2>
        <p className="text-center">
          Are you sure you want to delete this task?
        </p>

        <div className="d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-secondary w-100 me-3"
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </button>

          <button
            type="button"
            className="btn btn-success w-100"
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
