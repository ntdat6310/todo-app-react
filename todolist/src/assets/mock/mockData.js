const { v4: uuidv4 } = require("uuid");
// Level: 0 - Small, 1 - Medium, 2 - High
// State: 0 - To do, 1 - Doing, 2 - Done
const taskList = [
  { id: uuidv4(), task: "Mark", level: 1, state: 0, deadline: "10/20/2022" },
  { id: uuidv4(), task: "Jacob", level: 0, state: 1, deadline: "10/16/2022" },
  { id: uuidv4(), task: "Bird", level: 2, state: 2, deadline: "10/14/2022" },
  { id: uuidv4(), task: "Larry", level: 1, state: 1, deadline: "10/5/2022" },
];

export default taskList;
