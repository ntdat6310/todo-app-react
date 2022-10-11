import React from "react";

export default function Search() {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Type here..." />
      <button className="btn btn-outline-secondary" type="button">
        Clear
      </button>
    </div>
  );
}
