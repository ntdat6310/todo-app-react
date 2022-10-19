import Control from "../components/Control";
import Header from "../components/Header";
import Table from "../components/Table";
import "../styles/home.css";
import { useRef, useState } from "react";
import taskList from "../assets/mock/mockData";
import { deleteTask, getHandledTasks, editTask } from "../utils/task";

function Home() {
  const taskContainer = useRef(taskList);

  const [searchKey, setSearchKey] = useState("");

  const [order, setOrder] = useState({
    taskOrder: "",
    deadlineOrder: "",
  });

  const [filter, setFilter] = useState({
    level: [0, 1, 2], // [0,1,2]
    state: [0, 1, 2], // [0,1,2]
  });

  const [tasks, setTasks] = useState(() => {
    return getHandledTasks(
      [...taskContainer.current],
      searchKey,
      order,
      filter
    );
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
    const newTasks = getHandledTasks(
      [...taskContainer.current],
      searchKey,
      newOrder,
      filter
    );
    console.log("newTasks", newTasks);
    setTasks(newTasks);
  };

  const handleSearch = (searchInput) => {
    setSearchKey(searchInput);
    setTasks(
      getHandledTasks(taskContainer.current, searchInput, order, filter)
    );
  };

  const handleStateChange = (task) => {
    taskContainer.current = taskContainer.current.map((item) => {
      return item.id === task.id ? { ...item, state: task.state } : item;
    });
    setTasks(
      getHandledTasks([...taskContainer.current], searchKey, order, filter)
    );
  };

  const handleSubmitAdd = (taskSubmit) => {
    taskContainer.current = [...taskContainer.current, taskSubmit];
    setTasks(
      getHandledTasks([...taskContainer.current], searchKey, order, filter)
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => {
      taskContainer.current = deleteTask([...taskContainer.current], taskId);
      return deleteTask([...prevTasks], taskId);
    });
  };

  const handleEdit = (editedTask) => {
    const [newTasks, isTaskChanged] = editTask(
      [...taskContainer.current],
      editedTask
    );
    taskContainer.current = isTaskChanged ? newTasks : taskContainer.current;

    setTasks((prevTasks) => {
      const [newTasks, isTaskChanged] = editTask([...prevTasks], editedTask);
      return isTaskChanged ? newTasks : prevTasks;
    });
  };

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
    setTasks(
      getHandledTasks([...taskContainer.current], searchKey, order, newFilter)
    );
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
