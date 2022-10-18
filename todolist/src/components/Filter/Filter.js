import React, { useState } from "react";
import FilterForm from "../Modal/FilterForm";

export default function Filter(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={openModal}>
        <i className="fa-solid fa-filter"></i> Filter
      </button>
      <FilterForm
        filter={props.filter}
        isOpen={isOpen}
        closeModal={closeModal}
        onFilterSubmit={props.onFilterSubmit}
      />
    </>
  );
}
