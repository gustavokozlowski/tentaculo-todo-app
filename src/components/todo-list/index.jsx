import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { TodosContext } from "../../contexts/todos";
import { useContext } from "react";
import "../../assets/css/todo-list.css";

export function TodoList() {
  const { todos, handleEdit, handleDelete } = useContext(TodosContext);

  return (
    <div className="containerApp">
      <div className="container-todo-list">
        <div className="list-todo">
          <div className="todo-header">
            <h1>Lista de tarefas</h1>
          </div>
          {todos.length === 0 && (
            <div className="list-empty">
              {" "}
              <p id="empty-text">Nenhuma tarefa pendente </p>{" "}
              <FcOk id="check" />{" "}
            </div>
          )}
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
              <p>Data de conclusão: {todo.dayConclusion}</p>
              <div className="actions">
                <span onClick={() => handleEdit(todo)}>
                  {!todo.done ? (
                    <BsBookmarkCheck id="undone" />
                  ) : (
                    <BsBookmarkCheckFill id="done" />
                  )}
                </span>
                <BsTrash id="trash" onClick={() => handleDelete(todo.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
