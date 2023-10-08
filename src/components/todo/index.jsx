import { HiOutlinePlusSm } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { TodosContext } from "../../contexts/todos";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export function Todo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const { loading, setTodos } = useContext(TodosContext);

  const handleSub = async (data) => {
    const { title, description, dayConclusion } = data;

    const todo = {
      id: uuidv4(),
      title: title,
      dayConclusion: dayConclusion,
      description: description,
      start: dayConclusion,
      done: false,
    };

    await fetch(import.meta.env.VITE_PUBLIC_API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, todo]);
    console.log("teste", todo);
    console.log("teste", dayConclusion);
    reset();
  };

  if (loading) {
    return <h2>Carregando...</h2>;
  }
  return (
    <>
      <div className="containerApp">
        <div className="App">
          <div className="todo-header">
            <h1>Criar Tarefa</h1>
          </div>
          <div className="form-todo">
            <form onSubmit={handleSubmit(handleSub)}>
              <div className="form-control">
                <label htmlFor="title">O que você vai fazer?</label>
                <input
                  id="title"
                  placeholder="Título da tarefa"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="form-control">
                <label htmlFor="dayConclusion">Data de conclusão:</label>
                <input
                  id="dayConclusion"
                  type="date"
                  {...register("dayConclusion", { required: true })}
                />
              </div>
              <div className="form-control">
                <label htmlFor="description">Descrição:</label>
                <textarea
                  rows="10"
                  maxLength="500"
                  id="description"
                  placeholder="Descreva com mais detalhes..."
                  {...register("description", { required: true })}
                />
              </div>
              <button id="button" type="submit">
                Adicionar
                <HiOutlinePlusSm id="button-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
