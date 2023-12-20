import { useEffect, useState } from "react";
import style from "./Task.module.scss";
import TaskCard from "./components/TaskCard";
import axios from "axios";
import TypeTask from "../../types/TypeTask";
import TypeTasks from "../../types/TypeTasks";
import CreateTask from "./components/CreateTask";

import IconCreateTask from "@mui/icons-material/NoteAdd";
import Button from "../../components/input/button/Button";
import CircleProgress from "../../components/circleProgress/CircleProgress";

const Task = () => {
    const [tasks, setTasks] = useState<TypeTasks>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isShowCreateTask, setIsShowCreateTask] = useState<boolean>(false);

    const handleShowCreateTask= () => {
        setIsShowCreateTask((prev) => !prev);
    }

    const getTasks = async () => {
        setIsLoading(true);
        setIsError(false);
        await axios.get(
            "http://localhost:8000/task"
        ).then((response) => {
            const taskList: TypeTasks = response.data;
            taskList?.sort((x, y) => x === y ? 0 : x ? -1 : 1);
            setTasks(taskList);
        }).catch(() => {
            setIsError(true);
        });
        setIsLoading(false);
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
                {isLoading && (
                    <div className={style.notification}>
                        <CircleProgress />
                    </div>
                )}
                {isError && (
                    <div className={style.notification}>
                        <span>コンテンツの読み込みに失敗しました</span>
                        <Button onClick={getTasks}>
                            <span>リロード</span>
                        </Button>
                    </div>
                )}
                {tasks?.map((data: TypeTask, index: number) => {
                    return <TaskCard {...data} key={index} />
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