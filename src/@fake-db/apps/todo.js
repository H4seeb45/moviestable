import axios from "axios";
import mock from "../mock";

const data = {
  tasks: [
    {
      id: 1,
      title: "Entire change break our wife wide it daughter mention member.",
      dueDate: "2020-11-25",
      description:
        "Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.",
      assignee: {
        fullName: "Jacob Ramirez",
        avatar: "",
        //("../../assets/images/avatars/12.png").default,
      },
    },
  ],
};

// ------------------------------------------------
// GET: Return Tasks
// ------------------------------------------------
mock.onGet("/apps/todo/tasks", { params }).reply((config) => {
  // eslint-disable-next-line object-curly-newline
  console.log("backend");
  const { q = "", filter, tag, sortBy: sortByParam = "latest" } = config.params;
  /* eslint-enable */
  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------
  let sortDesc = true;

  const sortBy = (() => {
    if (sortByParam === "title-asc") {
      sortDesc = false;
      return "title";
    }
    if (sortByParam === "title-desc") return "title";
    if (sortByParam === "assignee") {
      sortDesc = false;
      return "assignee";
    }
    if (sortByParam === "due-date") {
      sortDesc = false;
      return "dueDate";
    }
    return "id";
  })();

  // ------------------------------------------------
  // Filtering
  // ------------------------------------------------
  const queryLowered = q.toLowerCase();

  const hasFilter = (task) => {
    if (filter === "important") return task.isImportant && !task.isDeleted;
    if (filter === "completed") return task.isCompleted && !task.isDeleted;
    if (filter === "deleted") return task.isDeleted;
    return !task.isDeleted;
  };
  /* eslint-disable */
  const filteredData = data.tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(queryLowered) &&
      hasFilter(task) &&
      (tag ? task.tags.includes(tag) : true)
    );
  });
  /* eslint-enable  */

  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------
  const sortTasks = (key) => (a, b) => {
    let fieldA;
    let fieldB;

    // If sorting is by dueDate => Convert data to date
    if (key === "dueDate") {
      fieldA = new Date(a[key]);
      fieldB = new Date(b[key]);
      // eslint-disable-next-line brace-style
    }

    // If sorting is by assignee => Use `fullName` of assignee
    else if (key === "assignee") {
      fieldA = a.assignee ? a.assignee.fullName : null;
      fieldB = b.assignee ? b.assignee.fullName : null;
    } else {
      fieldA = a[key];
      fieldB = b[key];
    }

    let comparison = 0;

    if (fieldA === fieldB) {
      comparison = 0;
    } else if (fieldA === null) {
      comparison = 1;
    } else if (fieldB === null) {
      comparison = -1;
    } else if (fieldA > fieldB) {
      comparison = 1;
    } else if (fieldA < fieldB) {
      comparison = -1;
    }

    return comparison;
  };

  // Sort Data
  const sortedData = filteredData.sort(sortTasks(sortBy));
  if (sortDesc) sortedData.reverse();

  return [200, sortedData];
});

// ------------------------------------------------
// POST: Add new task
// ------------------------------------------------
mock.onPost("/apps/todo/add-tasks").reply((config) => {
  // Get event from post data
  const { task } = JSON.parse(config.data);

  const { length } = data.tasks;
  let lastIndex = 0;
  if (length) {
    lastIndex = data.tasks[length - 1].id;
  }
  task.id = lastIndex + 1;

  data.tasks.push(task);

  return [201, { task }];
});

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost("/apps/todo/update-task").reply((config) => {
  const taskData = JSON.parse(config.data).task;

  // Convert Id to number
  taskData.id = Number(taskData.id);

  const task = data.tasks.find((e) => e.id === Number(taskData.id));
  Object.assign(task, taskData);

  return [200, { task }];
});

// ------------------------------------------------
// DELETE: Remove Task
// ------------------------------------------------
mock.onDelete("/apps/todo/delete-task").reply((config) => {
  // Get task id from URL
  let taskId = config.taskId;

  // Convert Id to number
  taskId = Number(taskId);

  const task = data.tasks.find((t) => t.id === taskId);
  Object.assign(task, { isDeleted: true });
  return [200];
});
