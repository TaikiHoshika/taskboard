import style from "./Stepper.module.scss";

type props = {
    steps: Array<string>;
    active: number;
}

const Stepper = (props : props) => {
    return (
        <div className={style.container}>
            {props.steps.map((step, index) => {
                return (
                    <>
                        <div className={style.node}>
                            <div className={`${style.circle} ${index <= props.active && style.active}`}></div>
                            <span className={style.label}>{step}</span>
                        </div>
                        {index < props.steps.length -1 && <div className={`${style.line} ${index < props.active && style.active}`}></div>}
                    </>
                )
            })}
        </div>
    );
}

export default Stepper;