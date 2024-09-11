import { MdAutoDelete } from "react-icons/md";


function TodoItem({todoName, todoDate}) {

  return (
    // <div class="container text-center">
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
          <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;