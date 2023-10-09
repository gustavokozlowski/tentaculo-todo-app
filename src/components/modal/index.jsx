import Modal from "react-modal";
import { useContext } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { TodosContext } from "../../contexts/todos";
import "../../assets/css/modal.css";

Modal.setAppElement("#root");

export function ModalComponent() {
  const { isOpen, handleModal, customStyles, handleEdit } =
    useContext(TodosContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Modal isOpen={isOpen} onRequestClose={handleModal} style={customStyles}>
      <div className="container">
        <div className="modal-header">
          <h1>Editar Tarefa</h1>
        </div>
        <div className="form-todo">
          <form onSubmit={handleSubmit(handleEdit)}>
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
              Atualizar
              <HiOutlinePlusSm id="button-icon" />
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
