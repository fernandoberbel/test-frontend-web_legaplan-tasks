import { ButtonAdd, ButtonCancel } from "../ui/button/button";
import "./modal-add-task.scss";
import { FunctionComponent } from "react";

interface CardProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddTask: FunctionComponent<CardProps> = ({ isOpen, onClose }) => {
  if (isOpen) {
    return (
      <div className="modal-task">
        <form className="card">
          <h2>Nova tarefa</h2>

          <label htmlFor="">Título</label>

          <div className="label-input">
            <input
              type="text"
              name="nova-tarefa"
              id="new-task"
              placeholder="Digite"
              className="new-task"
            />

            <div className="btn-container">
              <ButtonCancel text="Cancelar" onClick={onClose} />
              <ButtonAdd text="Adicionar" />
            </div>
          </div>
        </form>
      </div>
    );
  }

  return null;
};

export { ModalAddTask };
