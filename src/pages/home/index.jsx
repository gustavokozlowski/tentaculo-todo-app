import { Outlet } from "react-router-dom";
import { Todo } from "../../components/todo";

export function Home() {
    return (
      <div className="container-home">
        <Todo />
        <Outlet />
      </div>
    );
  }
  