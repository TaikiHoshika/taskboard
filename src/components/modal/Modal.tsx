import { FC, ReactNode } from "react";
import style from "./Modal.module.scss";

const Modal: FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className={style.background}>
            {children}
        </div>
    );
}

export default Modal;