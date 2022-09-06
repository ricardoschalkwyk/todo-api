const Todo = require("./entities/todo.entity");

// This finds all the todo's inside the database
async function findAll(data) {
  const todoData = Todo.find(data);

  return todoData;
}

// This creates a new todo
async function create(data) {
  const newToDo = new Todo(data);
  // This saves the todo to the database
  return newToDo.save();
}

// This finds only one todo determined by the id for deleting it from the database
async function remove(id) {
  try {
    return Todo.findByIdAndDelete(id);
  } catch (error) {
    return error;
  }
}

module.exports = {
  findAll,
  create,
  remove,
};
