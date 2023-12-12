import { FC, ReactNode } from "react";
import style from "./Button.module.scss";

type props = {
    children?: ReactNode;
    onClick?: () => void;
    weight?: "noraml" | "bold";
}

const Button = (props: props) => {
    return (
        <button onClick={props.onClick} className={`${style.button} ${props.weight === "bold" && style.bold}`}>
            {props.children}
        </button>
    );
}

export default Button;