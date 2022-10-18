import Control from "../components/Control";
import Header from "../components/Header";
import Table from "../components/Table";
import taskList from "../assets/mock/mockData";
import "../styles/home.css";
import { useRef, useState } from "react";
import { deleteTask, getHandledTasks, editTask } from "../utils/task";

function Home() {
  const [tasks, setTasks] = useState(taskList);
  const [searchKey, setSearchKey] = useState("");
  const [order, setOrder] = useState({
    taskOrder: "",
    deadlineOrder: "",
  });

  const [filter, setFilter] = useState({
    level: [],
    state: [],
    // deadline:{
    //   start:
    //   end:
    // }
  });

  const handleOrder = (orderSelected) => {
    const newOrder = { ...order };

    // TaskOrder option is selected
    if (orderSelected.taskOrder !== undefined) {
      newOrder.taskOrder =
        order.taskOrder === orderSelected.taskOrder
          ? ""
          : orderSelected.taskOrder;
    }
    // DeadlineOrder option is selected
    else {
      newOrder.deadlineOrder =
        order.deadlineOrder === orderSelected.deadlineOrder
          ? ""
          : orderSelected.deadlineOrder;
    }

    setOrder(newOrder);
    setTasks(getHandledTasks(searchKey, newOrder));
  };

  const handleSearch = (value) => {
    setSearchKey(value);
    setTasks(getHandledTasks(value, order));
  };

  const handleStateChange = (task) => {
    const newTasks = tasks.map((item) => {
      return item.id === task.id ? { ...item, state: task.state } : item;
    });
    setTasks(newTasks);
  };

  const handleSubmitAdd = (taskSubmit) => {
    console.log(taskSubmit);
    setTasks([...tasks, taskSubmit]);
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => {
      return deleteTask([...prevTasks], taskId);
    });
  };

  const handleEdit = (editedTask) => {
    setTasks((prevTasks) => {
      const [newTasks, isTaskChanged] = editTask([...prevTasks], editedTask);
      return isTaskChanged ? newTasks : prevTasks;
    });
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);

    // Do something...
  };
  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Control
          onSearchChange={handleSearch}
          onOrderChange={handleOrder}
          searchKey={searchKey}
          order={order}
          onSubmitAdd={handleSubmitAdd}
          onFilterSubmit={handleFilter}
          filter={filter}
        />
        <Table
          taskList={tasks}
          onStateChange={handleStateChange}
          onDeleteSubmit={handleDelete}
          onEditSubmit={handleEdit}
        />
      </div>
    </div>
  );
}
export default Home;
