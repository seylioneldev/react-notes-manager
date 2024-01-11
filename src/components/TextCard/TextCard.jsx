import s from "./style.module.css";
import { Trash as Trashicon } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClickTrash, onClick }) {

    function onClickTrash_(e){

        onClickTrash()
        e.stopPropagation()
    }


  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-body">
          <div>
            <h5 className="card-title">{title}</h5>
            <Trashicon size={20} onClick={onClickTrash_}></Trashicon>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className={`card-text ${s.text_content}`}>{content}</p>
        </div>
      </div>
    </>
  );
}
