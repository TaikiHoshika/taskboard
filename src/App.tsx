import { Outlet } from "react-router-dom";
import style from "./App.module.scss";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default App;