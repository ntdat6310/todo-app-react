import React, { useState } from "react";
import AddTask from "./AddTask";
import Filter from "./Filter/Filter";
import Order from "./Order/Order";
import Search from "./Search/Search";

export default function Control(props) {
  const handleSearch = (key) => {
    props.onSearchChange(key);
  };

  const handleClearSearch = () => {
    props.onSearchChange("");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <Search
            searchKey={props.searchKey}
            onSearchKeyChange={handleSearch}
            onClearSearch={handleClearSearch}
          />
        </div>
        <div className="col-3">
          <Order onOrderChange={props.onOrderChange} order={props.order} />
          <Filter />
        </div>
        <div className="col-3">
          <AddTask onSubmitAdd={props.onSubmitAdd} />
        </div>
      </div>
    </div>
  );
}
