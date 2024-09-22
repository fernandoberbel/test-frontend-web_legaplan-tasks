import "./task.scss";
import { FunctionComponent } from "react";
import { Trash } from "lucide-react";

interface TaskProps {
  value: string;
  onDelete: () => void;
}

const Task: FunctionComponent<TaskProps> = ({ value, onDelete }) => {
  return (
    <li className="container-task">
      <input type="checkbox" id="inp-checkbox" />

      <div className="task-name">
        <p>{value}</p>
      </div>

      <button className="btn-trash" id="btn-trash" onClick={onDelete}>
        <Trash color="#B0BBD1" className="trash-icon" id="trash-icon" />
      </button>
    </li>
  );
};

export default Task;
