import style from "./Dashboard.module.scss";

const Dashboard = () => {
    return (
        <div className={style.container}>
            <div className={style.grid}>
                <div className={`${style.content} ${style.a}`}>1</div>
                <div className={`${style.content} ${style.profit}`}>
                    <span className={style.label}>今月の利益</span>
                    <div className={style.balance}>
                        <span className={style.label}>50,000 円</span>
                        <div className={style.diff}>
                            <span className={style.label}>前月比</span>
                            <span>- 1,000 円</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;