const todoList = () => {
  const all = [];

  let today = new Date().toLocaleDateString("en-CA");
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((arg) => arg.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((arg) => arg.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((arg) => arg.dueDate > today);
  };

  const toDisplayableList = (list) => {
    return list
      .map(
        (arg) =>
          `${arg.completed ? `[x]` : `[ ]`} ${arg.title} ${
            arg.dueDate != today ? arg.dueDate : " "
          }`
      )
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
