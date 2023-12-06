import Task from "./pages/task/Task";
import style from "./App.module.scss";

const App = () => {
    return (
        <div className={style.container}>
            <Task />
        </div>
    );
}

export default App;