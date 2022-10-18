import React, { useRef, useState } from "react";
import Modal from "react-modal";

export default function FilterForm(props) {
  Modal.setAppElement(document.getElementById("root"));
  const [levelFilter, setLevelFilter] = useState(props.filter.level); // [0,1,2]
  const [stateFilter, setStateFilter] = useState(props.filter.state); // [0,1,2]

  const onCloseModal = () => {
    props.closeModal();
    setLevelFilter(props.filter.level);
    setStateFilter(props.filter.state);
  };

  const onSubmit = () => {
    const filter = {
      level: levelFilter,
      state: stateFilter,
    };
    props.closeModal();
    props.onFilterSubmit(filter);
  };

  const isLevelChecked = (value) => {
    return levelFilter.some((element) => {
      return element === value;
    });
  };

  const handleLevelChange = (e) => {
    const { value, checked } = e.target;
    const valueInt = parseInt(value);

    // Case 1 : The user checks the box
    if (checked) {
      setLevelFilter([...levelFilter, valueInt]);
    }
    // Case 2  : The user unchecks the box
    else {
      const newLevel = levelFilter.filter((e) => {
        return e !== valueInt;
      });
      setLevelFilter([...newLevel]);
    }
  };

  const isStateChecked = (value) => {
    return stateFilter.some((element) => {
      return element === value;
    });
  };

  const handleStateChange = (e) => {
    const { value, checked } = e.target;

    const valueInt = parseInt(value);

    // Case 1 : The user checks the box
    if (checked) {
      setStateFilter([...stateFilter, valueInt]);
    }
    // Case 2  : The user unchecks the box
    else {
      const newState = stateFilter.filter((e) => {
        return e !== valueInt;
      });
      setStateFilter([...newState]);
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => {
        onCloseModal();
      }}
      contentLabel="Filter Task"
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
        onClick={() => {
          onCloseModal();
        }}
        style={{
          textAlign: "right",
          fontSize: "20px",
          padding: "8px",
          fontWeight: "normal",
          cursor: "pointer",
        }}
      >
        <i className="fa fa-times" aria-hidden="true" />
      </div>

      {/* Filter Level */}
      <div className="card mt-4">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{
            left: "50%",
            fontSize: "18px",
          }}
        >
          Level
        </span>
        <div className="card-body">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="chkLevelSmall"
              name="levelFilter"
              value={0}
              onChange={handleLevelChange}
              defaultChecked={isLevelChecked(0)}
            />
            <label className="form-check-label" htmlFor="chkLevelSmall">
              Small
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="chkLevelMedium"
              name="levelFilter"
              value={1}
              onChange={handleLevelChange}
              defaultChecked={isLevelChecked(1)}
            />
            <label className="form-check-label" htmlFor="chkLevelMedium">
              Medium
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="chkLevelHigh"
              name="levelFilter"
              value={2}
              onChange={handleLevelChange}
              defaultChecked={isLevelChecked(2)}
            />
            <label className="form-check-label" htmlFor="chkLevelHigh">
              High
            </label>
          </div>
        </div>
      </div>

      {/* Filter State */}
      <div className="card mt-4">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{
            left: "50%",
            fontSize: "18px",
          }}
        >
          State
        </span>
        <div className="card-body">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="chkStateTodo"
              value={0}
              name="stateFilter"
              onChange={handleStateChange}
              defaultChecked={isStateChecked(0)}
            />
            <label className="form-check-label" htmlFor="chkStateTodo">
              To do
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="chkStateDoing"
              value={1}
              name="stateFilter"
              onChange={handleStateChange}
              defaultChecked={isStateChecked(1)}
            />
            <label className="form-check-label" htmlFor="chkStateDoing">
              Doing
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="chkStateDone"
              value={2}
              name="stateFilter"
              onChange={handleStateChange}
              defaultChecked={isStateChecked(2)}
            />
            <label className="form-check-label" htmlFor="chkStateDone">
              Done
            </label>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="row mt-4">
        <div className="col-12">
          <button
            className="btn btn-primary w-100"
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
