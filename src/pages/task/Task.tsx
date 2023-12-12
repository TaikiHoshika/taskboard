import { useEffect, useState } from "react";
import style from "./Task.module.scss";
import TaskCard from "./components/TaskCard";
import axios from "axios";
import TypeTask from "../../types/TypeTask";
import TypeTasks from "../../types/TypeTasks";
import CreateTask from "./components/CreateTask";

import IconCreateTask from "@mui/icons-material/NoteAdd";
import Button from "../../components/button/Button";

const Task = () => {
    const [tasks, setTasks] = useState<TypeTasks>();
    const [isShowCreateTask, setIsShowCreateTask] = useState<boolean>(false);

    const handleShowCreateTask= () => {
        setIsShowCreateTask((prev) => !prev);
    }

    const getTasks = async () => {
        await axios.get(
            "http://localhost:8000/task"
        ).then((response) => {
            const taskList: TypeTasks = response.data;
            taskList.sort((x, y) => x === y ? 0 : x ? -1 : 1);
            setTasks(taskList);
        });
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <div className={style.container}>
                <div className={style.toolBox}>
                    <div className={style.column}>
                        <input
                            type="text"
                            placeholder="タスクを検索..."
                            className={style.search}
                        />
                        <Button onClick={handleShowCreateTask}>
                            <IconCreateTask />
                            <span>タスクを追加</span>
                        </Button>
                    </div>
                </div>
                {tasks?.map((data: TypeTask) => {
                    return <TaskCard {...data} />
                })}
            </div>
            <CreateTask
                isShow={isShowCreateTask}
                onClose={handleShowCreateTask}
            />
        </>
    );
}

export default Task;