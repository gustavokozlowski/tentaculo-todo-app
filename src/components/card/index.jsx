import "../../assets/css/todo-list.css";
import {
  BsTrash,
  BsBookmarkCheck,
  BsBookmarkCheckFill,
  BsPencil,
  BsFillClockFill,
} from "react-icons/bs";
import { ModalComponent } from "../modal";
import { TodosContext } from "../../contexts/todos";
import { useContext } from "react";

export function Card({ todo }) {
  const { handleDone, handleDelete, handleModal } = useContext(TodosContext);

  function handleClick(id) {
    localStorage.setItem("id", id);
    console.log(localStorage.getItem("id"));
    handleModal();
  }
  return (
    <>
      <div className="todo" key={todo?.id}>
        <div className="title-todo">
          <div className="todo-day">
            <div className="icon">
              <BsFillClockFill />
            </div>
            {todo?.dayConclusion}
          </div>
          <span onClick={() => handleDone(todo)}>
            {!todo?.done ? (
              <BsBookmarkCheck id="undone" />
            ) : (
              <BsBookmarkCheckFill id="done" />
            )}
          </span>
        </div>
        <h3 className={todo?.done ? "todo-done" : ""}>{todo?.title}</h3>

        {todo?.description && (
          <p className="todo-description">descrição: {todo?.description} </p>
        )}
        <div className="actions">
          <BsPencil id="edit" onClick={() => handleClick(todo?.id)} />
          <BsTrash id="trash" onClick={() => handleDelete(todo?.id)} />
        </div>
      </div>
      <ModalComponent />
    </>
  );
}
