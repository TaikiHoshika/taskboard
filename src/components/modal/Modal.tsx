import { ReactNode } from "react";
import style from "./Modal.module.scss";

type props = {
    children: ReactNode;
}

const Modal = (props: props) => {
    return (
        <div className={style.background} id="modal">
            {props.children}
        </div>
    );
}

export default Modal;