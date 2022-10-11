import React from "react";
import AddTask from "./AddTask";
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";

export default function Control() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <Search />
        </div>
        <div className="col-3">
          <Sort />
          <Filter />
        </div>
        <div className="col-3">
          <AddTask />
        </div>
      </div>
    </div>
  );
}
