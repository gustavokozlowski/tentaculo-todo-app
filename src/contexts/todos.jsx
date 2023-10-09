import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const TodosContext = createContext();

// eslint-disable-next-line react/prop-types
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "50vw",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(97, 119, 248)",
    },
  };

  const handleDelete = async (id) => {
    try {
      await fetch(import.meta.env.VITE_PUBLIC_API + "/todos/" + id, {
        method: "DELETE",
      });
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
      toast.success("Item removido da sua lista de tarefas!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  const handleDone = async (todo) => {
    todo.done = !todo.done;
    try {
      const data = await fetch(
        import.meta.env.VITE_PUBLIC_API + "/todos/" + todo.id,
        {
          method: "PATCH",
          body: JSON.stringify(todo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTodos((prevState) =>
        prevState.map((t) => (t.id === data.id ? (t = data) : t))
        );
        toast.info("O status da sua tarefa foi alterado", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000,
        });
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };
  const handleEdit = async (data) => {
    const id = localStorage.getItem("id");
    try {
      await fetch(import.meta.env.VITE_PUBLIC_API + "/todos/" + id, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTodos((prevState) =>
        prevState.map((t) => (t.id === id ? (t = data) : t))
      );
      toast.success("Tarefa atualizada com sucesso", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      handleModal();
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  useEffect(() => {
    try {
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
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }, []);

  return (
    <TodosContext.Provider
      value={{
        handleDelete,
        handleDone,
        loading,
        setLoading,
        setTodos,
        todos,
        isOpen,
        setIsOpen,
        customStyles,
        handleModal,
        handleEdit,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
