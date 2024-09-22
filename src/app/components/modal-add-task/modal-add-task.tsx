"use client";

import "./modal-add-task.scss";
import { FunctionComponent, useState } from "react";
import { ButtonAdd, ButtonCancel } from "../ui/buttons/buttons";

interface ModalAddTaskProps {
  isOpen: boolean;
  onClose: () => void;
  addTask: (newTask: string) => void;
}

const ModalAddTask: FunctionComponent<ModalAddTaskProps> = ({
  isOpen,
  onClose,
  addTask,
}) => {
  const [task, setTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }

    addTask(task);
    alert("Tarefa Adicionada!");
    setTask("");
    onClose();
  };

  if (isOpen) {
    return (
      <div className="modal-task">
        <div className="container-form">
          <h2>Nova tarefa</h2>

          <form id="form-task" onSubmit={submitTask}>
            <label htmlFor="new-task">Título</label>

            <div className="label-input">
              <input
                className="new-task"
                id="new-task"
                type="text"
                name="new-task"
                placeholder="Digite"
                value={task}
                onChange={handleChange}
              />

              <div className="btn-container">
                <ButtonCancel text="Cancelar" onClick={onClose} />
                <ButtonAdd value="Adicionar" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export { ModalAddTask };
