import { ChangeEvent } from "react";
import style from "./Switch.module.scss";

type props = {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const Switch = (props: props) => {
    return (
        <div>
            <input
                id={props.name}
                type="checkbox"
                name={props.name}
                onChange={props.onChange}
                className={style.switch}
            />
            <label htmlFor={props.name}></label>
        </div>
    );
}

export default Switch;