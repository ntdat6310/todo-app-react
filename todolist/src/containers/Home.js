import Control from "../components/Control";
import Header from "../components/Header";
import Table from "../components/Table";
import taskList from "../assets/mock/mockData";
import "../styles/home.css";
import { useState } from "react";

function Home() {
  const [tasks, setTasks] = useState(taskList);
  console.log("Home Render");
  const handleSearch = (searchKey) => {
    const reg = new RegExp(searchKey, "i");
    const newTasks = taskList.filter((task) => {
      // Why not using : return task.task.includes(searchKey) ?
      // Because it's not ignore case-insensitive
      // => Using Regular Expression, but: /variable/i is not working
      // If you wanna use Regular Expression with variable => using Contructor
      return task.task.search(reg) >= 0;
    });
    setTasks(newTasks);
  };

  const handleStateChange = (task) => {
    const newTasks = tasks.map((item) => {
      return item.id === task.id ? { ...item, state: task.state } : item;
    });
    setTasks(newTasks);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Control onSearchChange={handleSearch} />
        <Table taskList={tasks} onStateChange={handleStateChange} />
      </div>
    </div>
  );
}
export default Home;
