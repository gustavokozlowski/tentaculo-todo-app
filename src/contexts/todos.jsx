import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

// eslint-disable-next-line react/prop-types
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    await fetch(import.meta.env.VITE_PUBLIC_API + "/todos/" + id, {
      method: "DELETE",
    });
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    const data = await fetch(
      import.meta.env.VITE_PUBLIC_API + "/todos/" + todo.id,
      {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setTodos((prevState) =>
      prevState.map((t) => (t.id === data.id ? (t = data) : t))
    );
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await fetch(import.meta.env.VITE_PUBLIC_API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
      setLoading(false);
      setTodos(res);
    };

    loadData();
  }, []);

  return (
    <TodosContext.Provider
      value={{
        handleDelete,
        handleEdit,
        loading,
        setLoading,
        setTodos,
        todos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
