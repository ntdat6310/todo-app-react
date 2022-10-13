import React, { useState } from "react";
import AddTask from "./AddTask";
import Filter from "./Filter/Filter";
import Order from "./Order/Order";
import Search from "./Search/Search";

export default function Control(props) {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (key) => {
    setSearchKey(key);
    props.onSearchChange(key);
  };

  const handleClearSearch = () => {
    setSearchKey("");
    props.onSearchChange("");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <Search
            searchKey={searchKey}
            onSearchKeyChange={handleSearch}
            onClearSearch={handleClearSearch}
          />
        </div>
        <div className="col-3">
          <Order />
          <Filter />
        </div>
        <div className="col-3">
          <AddTask />
        </div>
      </div>
    </div>
  );
}
