import React from "react";
import Item from "./Item";
import taskList from "../assets/mock/mockData";

export default function Table() {
  const renderTasks = function () {
    return taskList.map((item, index) => {
      return (
        <Item
          key={index}
          idx={index}
          taskName={item.task}
          level={item.level}
          state={item.state}
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
                    <th scope="col" style={{ width: "5%" }}>
                      #
                    </th>
                    <th scope="col">Task</th>
                    <th scope="col" style={{ width: "10%" }}>State</th>
                    <th scope="col" style={{ width: "10%" }}>
                      Level
                    </th>
                    <th scope="col" style={{ width: "20%" }}>
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
