"use client";

import { useState } from "react";
import "./home-task.scss";
import { ModalAddTask } from "../modal-add-task/modal-add-task";

export default function HomeTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
      <div className="card-tasks" id="card-tasks">
        <span className="card-title">Suas tarefas de hoje</span>
        <ul></ul>
      </div>

      <button className="btn-add-home" id="btn-add-home" onClick={openModal}>
        Adicionar nova tarefa
      </button>

      <ModalAddTask isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
