import style from "./Header.module.scss";

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <span className={style.title}>雑にタスク管理くん(α)</span>
            </div>
        </div>
    );
}

export default Header;