import "./modal-del-task.scss";

export function ModalDelTask() {
  return (
    <div className="modal-overlay">
      <form className="card">
        <h2>Deletar tarefa</h2>

        <span className="span-del">
          Tem certeza que você deseja deletar essa tarefa?
        </span>

        <div className="btn-container">
          {/* <ButtonCancel text="Cancelar" onClick={onclose} />
          <ButtonDel text="Deletar" /> */}
        </div>
      </form>
    </div>
  );
}
