import { FcOk } from "react-icons/fc";
import { TodosContext } from "../../contexts/todos";
import { useContext } from "react";
import "../../assets/css/todo-list.css";
import { Card } from "../card";

export function TodoList() {
  const { todos } = useContext(TodosContext);

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
          {todos &&
            todos.map((todo, index) => {
              return <Card key={index} todo={todo} />;
            })}
        </div>
      </div>
    </main>
  );
}
