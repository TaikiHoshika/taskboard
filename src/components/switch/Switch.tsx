import style from "./Switch.module.scss";

type props = {
    onChange: () => void;
}

const Switch = (props: props) => {
    return (
        <div>
            <input type="checkbox" onChange={props.onChange} className={style.switch} />
        </div>
    );
}

export default Switch;