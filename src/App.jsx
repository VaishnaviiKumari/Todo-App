import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItem = 
  [
  {
    name : "Buy Milk",
    dueDate : "09/09/2024",
  },
  {
    name : "Go to Placement",
    dueDate : "09/09/2024",
  },
  {
    name : "I am placed",
    dueDate : "09/09/2024",
  },
]


  return (
    <center className = "todo-container">
      <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItem}></TodoItems>
    </center>
  );
}

export default App;
