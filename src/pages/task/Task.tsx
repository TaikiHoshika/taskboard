import { useEffect, useState } from "react";
import style from "./Task.module.scss";
import TaskCard from "./components/TaskCard";
import axios from "axios";
import TypeTask from "../../types/TypeTask";
import TypeTasks from "../../types/TypeTasks";

const Task = () => {
    const [tasks, setTasks] = useState<TypeTasks>();

    const getTasks = async () => {
        await axios.get(
            "http://localhost:8000/task"
        ).then((response) => {
            const taskList: TypeTasks = response.data;
            taskList.sort((x, y) => x === y ? 0 : x ? -1 : 1);
            setTasks(taskList);
        });
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className={style.container}>
            {tasks?.map((data: TypeTask) => {
                return <TaskCard {...data} />
            })}
        </div>
    );
}

export default Task;