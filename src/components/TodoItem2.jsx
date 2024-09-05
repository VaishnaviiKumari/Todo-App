function TodoItem2() {

  let todoName = 'Go to College';
  let todoDate = '02/09/2024';



  return (
    // <div class="container text-center">
    <div className="container ">   
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
