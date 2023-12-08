import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

import IconDashboard from "@mui/icons-material/Dashboard";
import IconTask from "@mui/icons-material/Assignment";

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <span className={style.title}>雑にタスク管理くん(α)</span>
            </div>
            <div className={style.routes}>
                <div className={style.link}>
                    <NavLink
                        to="/"
                        className={({isActive}) => (isActive ? style.active : "")}
                    >
                        <IconDashboard />
                        <span>ダッシュボード</span>
                    </NavLink>
                </div>
                <div className={style.link}>
                    <NavLink
                        to="/task"
                        className={({isActive}) => (isActive ? style.active : "")}
                    >
                        <IconTask />
                        <span>タスク</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;