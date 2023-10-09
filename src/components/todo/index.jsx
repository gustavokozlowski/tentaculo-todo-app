import { HiOutlinePlusSm } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { TodosContext } from "../../contexts/todos";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../assets/css/todo.css";

export function Todo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  console.log(errors);
  if (loading) {
    return <h2>Carregando...</h2>;
  }
  return (
    <>
      <div className="containerApp">
        <div className="container-todo">
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
                  {...register("title", {
                    required: {
                      message: "Insira um título",
                      value: true,
                    },
                  })}
                />
                {errors.title && (
                  <span className="error-message">{errors.title.message}</span>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="dayConclusion">Data de conclusão:</label>
                <input
                  id="dayConclusion"
                  type="date"
                  {...register("dayConclusion", {
                    required: {
                      message: "Insira uma data válida",
                      value: true,
                    },
                  })}
                />
                {errors.dayConclusion && (
                  <span className="error-message">
                    {errors.dayConclusion.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="description">Descrição(opcional):</label>
                <textarea
                  rows="6"
                  maxLength="500"
                  id="description"
                  placeholder="Descreva com mais detalhes..."
                  {...register("description")}
                />
                {errors.description && (
                  <span className="error-message">
                    {errors?.description?.message}
                  </span>
                )}
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
