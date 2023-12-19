import style from "./CircleProgress.module.scss";

const CircleProgress = () => {
    return(
        <>
            <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                className={style.progressCircle}
            >
                <circle cx="50" cy="50" r="40"/>
            </svg>
        </>
    );
}

export default CircleProgress;