import React, { useState } from "react";

export default function Search(props) {
  const onKeyChange = (e) => {
    props.onSearchKeyChange(e.target.value);
  };
  const onClearSearch = () => {
    props.onClearSearch();
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type here..."
        value={props.searchKey}
        onChange={(e) => {
          onKeyChange(e);
        }}
      />

      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          onClearSearch();
        }}
      >
        Clear
      </button>
    </div>
  );
}
