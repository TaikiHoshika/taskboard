import { ReactNode } from "react";
import style from "./HorizontalRule.module.scss";

type props = {
    label?: string;
}

const HorizontalRule = (props: props) => {
    return (
        <div className={style.hr}>
            <span>
                {props.label}
            </span>
        </div>
    );
}

export default HorizontalRule;