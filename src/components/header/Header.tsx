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
                <NavLink
                    to="/"
                    className={({isActive}) => (isActive ? style.active : "")}
                >
                    <div className={style.link}>
                        <IconDashboard />
                        <span>ダッシュボード</span>
                    </div>
                </NavLink>
                <NavLink
                    to="/task"
                    className={({isActive}) => (isActive ? style.active : "")}
                >
                    <div className={style.link}>
                        <IconTask />
                        <span>タスク</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;