import React, { FunctionComponent } from "react";
import "./buttons.scss";

interface ButtonAddProps {
  value: string;
}

interface ButtonDelProps {
  text: string;
  onClick: () => void;
}

interface ButtonCancelProps {
  text: string;
  onClick: () => void;
}

const ButtonAdd: FunctionComponent<ButtonAddProps> = ({ value }) => {
  return <input className="btn-add" id="btn-add" type="submit" value={value} />;
};

const ButtonDel: FunctionComponent<ButtonDelProps> = ({ text, onClick }) => {
  return (
    <button className="btn-del" id="btn-del" onClick={onClick}>
      {text}
    </button>
  );
};

const ButtonCancel: FunctionComponent<ButtonCancelProps> = ({
  text,
  onClick,
}) => {
  return (
    <button className="btn-cancel" id="btn-cancel" onClick={onClick}>
      {text}
    </button>
  );
};

export { ButtonAdd, ButtonDel, ButtonCancel };
