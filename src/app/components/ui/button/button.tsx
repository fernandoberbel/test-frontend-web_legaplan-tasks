import React, { FunctionComponent } from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonAdd: FunctionComponent<ButtonProps> = ({ text }) => {
  return (
    <button className="btn-add" id="btn-add">
      {text}
    </button>
  );
};

const ButtonDel: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="btn-del" id="btn-del" onClick={onClick}>
      {text}
    </button>
  );
};

const ButtonCancel: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="btn-cancel" id="btn-cancel" onClick={onClick}>
      {text}
    </button>
  );
};

export { ButtonAdd, ButtonDel, ButtonCancel };
