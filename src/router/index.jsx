import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "../components/header";
import { Home } from "../pages/home";
import { TodoList } from "../components/todo-list";
import { Calendar } from "../components/calendar";
import { Todo } from "../components/todo";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/home" element={<Todo />} />
          <Route path="/home/:id" element={<Todo />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
