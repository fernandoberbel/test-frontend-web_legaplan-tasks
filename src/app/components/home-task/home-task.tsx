"use client";

import "./home-task.scss";
import { useState } from "react";
import { ModalAddTask } from "../modal-add-task/modal-add-task";
import Task from "../ui/task/task";

const HomeTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [array, setArray] = useState<string[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTask = (newTask: string) => {
    setArray((prevArray) => [...prevArray, newTask]);
  };

  const removeTask = (taskToRemove: string) => {
    setArray((prevArray) => prevArray.filter((task) => task !== taskToRemove));
  };

  return (
    <section>
      <div className="card-tasks" id="card-tasks">
        <span className="card-title">Suas tarefas de hoje</span>
        <ul>
          {array.map((task, index) => (
            <Task key={index} value={task} onDelete={() => removeTask(task)} />
          ))}
        </ul>
      </div>

      <button className="btn-add-home" id="btn-add-home" onClick={openModal}>
        Adicionar nova tarefa
      </button>

      <ModalAddTask
        isOpen={isModalOpen}
        onClose={closeModal}
        addTask={addTask}
      />
    </section>
  );
};

export { HomeTask };
