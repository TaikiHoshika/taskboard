import style from "./Task.module.scss";
import TaskCard from "./components/TaskCard";

const Task = () => {
    return (
        <div className={style.container}>
            <TaskCard
                user={"TestUser01"}
                buyAt={new Date(2023, 11, 1, 0, 0, 0)}
                deliveryAt={new Date(2023, 11, 10, 23, 59, 59)}
                sales={3000}
                amount={1}
                step={0}
                isPinned={true}
            />
            <TaskCard
                user={"TestUser02"}
                buyAt={new Date(2023, 10, 1, 0, 0, 0)}
                deliveryAt={new Date(2023, 11, 10, 23, 59, 59)}
                sales={6000}
                amount={2}
                step={2}
                isPinned={false}
            />
        </div>
    );
}

export default Task;