import React, { useState } from "react";
import ConfirmDelete from "../Modal/ConfirmDelete";

export default function Delete(props) {
  const [isShowDelete, setIsShowDelete] = useState(false);

  function handleDeleteOpen() {
    setIsShowDelete(true);
  }

  function handleDeleteCancel() {
    setIsShowDelete(false);
  }

  function handleDeleteSubmit() {
    setIsShowDelete(false);
    props.onDeleteSubmit(props.taskId);
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => {
          handleDeleteOpen();
        }}
      >
        <i className="fa-trash-o" />
      </button>
      <ConfirmDelete
        isOpen={isShowDelete}
        onDeleteCancel={handleDeleteCancel}
        onDeleteSubmit={handleDeleteSubmit}
      />
    </>
  );
}
