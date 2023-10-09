import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/global/index.css";
import { TodosProvider } from "./contexts/todos.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
      <ToastContainer autoClose={8000} />
    </TodosProvider >
  </React.StrictMode>
);
