import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} key={item.name}></TodoItem>
      ))}

      {/* <TodoItem todoName="Buy Milk" todoDate="09/09/2024"></TodoItem>
        <TodoItem todoName="Go to College" todoDate="09/09/2024"></TodoItem> */}
    </div>
  );
};

export default TodoItems;
