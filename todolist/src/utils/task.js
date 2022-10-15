import taskList from "../assets/mock/mockData";

const getHandledTasks = (
  searchKey = "",
  order = undefined,
  filter = undefined
) => {
  // Query TaskList from DB
  //   ...
  const tasks = [...taskList];

  let taskResults;
  taskResults = getSearchedTasks(tasks, searchKey);
  taskResults = getFilterededTasks(taskResults, filter);
  return getOrderedTasks(taskResults, order);
};

const getSearchedTasks = (tasks, searchKey) => {
  if (searchKey === undefined || searchKey === "") return tasks;
  const reg = new RegExp(searchKey, "i");
  const newTasks = tasks?.filter((task) => {
    // Why not using : return task.task.includes(value) ?
    // Because it's not ignore case-insensitive
    // => Using Regular Expression, but: /variable/i is not working
    // If you wanna use Regular Expression with variable => using Contructor
    return task.task.search(reg) >= 0;
  });
  return newTasks;
};

const getOrderedTasks = (tasks, order) => {
  if (order === undefined) return tasks;

  // Deadline order
  if (order?.deadlineOrder === "asc") {
    tasks.sort(function compare(a, b) {
      return new Date(a.deadline) - new Date(b.deadline);
    });
  } else if (order?.deadlineOrder === "desc") {
    tasks.sort(function compare(a, b) {
      return new Date(b.deadline) - new Date(a.deadline);
    });
  }

  // Task order

  return tasks;
};

const getFilterededTasks = (tasks, filter) => {
  if (filter === undefined) return tasks;
};

// Get Task List after deleting specific task
const deleteTask = (tasks, taskId) => {
  let idxDelete = -1;
  tasks.forEach((element, idx) => {
    if (element.id === taskId) {
      idxDelete = idx;
    }
  });
  tasks.splice(idxDelete, 1);
  return tasks;
};

export { getHandledTasks, deleteTask };
