import React from "react";
export default function Item(props) {
  const { idx, taskName, level, state } = props;
  function renderLevel(lv) {
    if (lv === 0) {
      return <span className="badge bg-secondary p-2">Small</span>;
    }
    if (lv === 1) {
      return <span className="badge bg-primary p-2">Medium</span>;
    }
    if (lv === 2) {
      return <span className="badge bg-danger p-2">High</span>;
    }
  }

  function renderState(state) {
    let btnColorBS5 = null;
    if (state === 0) {
      state = "To do";
      btnColorBS5 = "btn-primary";
    } else if (state === 1) {
      state = "Doing";
      btnColorBS5 = "btn-danger";
    } else {
      state = "Done";
      btnColorBS5 = "btn-secondary";
    }
    return (
      <div className="dropdown">
        <button
          className={`btn ${btnColorBS5} dropdown-toggle`}
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {state}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              <i class="fa-battery-empty" /> Todo
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa-battery-quarter" /> Doing
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa-battery-full" /> Done
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <tr>
      <th scope="row">{idx}</th>
      <td>{taskName}</td>
      <td>{renderState(state)}</td>
      <td>{renderLevel(level)}</td>
      <td>
        <button type="button" className="btn btn-warning me-2">
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
