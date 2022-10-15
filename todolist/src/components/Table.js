import React from "react";
import Item from "./Item";

export default function Table(props) {
  const renderTasks = function () {
    return props.taskList.map((item, index) => {
      return (
        <Item
          key={index}
          task={item}
          onStateChange={props.onStateChange}
          onDeleteSubmit={props.onDeleteSubmit}
        />
      );
    });
  };

  return (
    <div className="container-fluid mb-4 mt-3">
      <div className="card">
        <div className="card-header">List Task</div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col" style={{ width: "15%" }}>
                      Deadline
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      State
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      Level
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>{renderTasks()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
