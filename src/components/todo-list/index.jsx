import {
  BsTrash,
  BsBookmarkCheck,
  BsBookmarkCheckFill,
  BsPencil,
  BsFillClockFill,
  BsFillGeoFill,
} from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { TodosContext } from "../../contexts/todos";
import { useContext } from "react";
import "../../assets/css/todo-list.css";

export function TodoList() {
  const { todos, handleEdit, handleDelete } = useContext(TodosContext);

  return (
    <main>
      <div className="container-todo-list">
        <div className="list-todo">
          <div className="todo-list-header">
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
              <div className="title-todo">
                <div className="todo-day">
                  <div className="icon">
                    <BsFillClockFill />
                  </div>
                  {todo.dayConclusion}
                </div>
                <span onClick={() => handleEdit(todo)}>
                  {!todo.done ? (
                    <BsBookmarkCheck id="undone" />
                  ) : (
                    <BsBookmarkCheckFill id="done" />
                  )}
                </span>
              </div>
              <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>

              {todo.description && (
                <p className="todo-description">
                  descrição: {todo.description}{" "}
                </p>
              )}
              <div className="actions">
                <BsPencil id="edit" onClick={() => handleDelete(todo.id)} />
                <BsTrash id="trash" onClick={() => handleDelete(todo.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
