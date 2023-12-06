import Stepper from "../../components/stepper/Stepper";
import style from "./Task.module.scss";

const Task = () => {
    return (
        <div className={style.container}>
            <div className={style.task}>
                <span className={style.username}>User01</span>
                <div className={style.buyAt}>
                    <span className={style.label}>購入日</span>
                    <span>12/1 (2日経過)</span>
                </div>
                <div className={style.deliveryAt}>
                    <span className={style.label}>納品予定日</span>
                    <span>12/15 (残り14日)</span>
                </div>
                <div className={style.sales}>
                    <span className={style.label}>売上</span>
                    <span>3,000円 (2,340円)</span>
                </div>
                <div className={style.amount}>
                    <span className={style.label}>納入枚数</span>
                    <span>1点</span>
                </div>
                <span className={style.status}>
                    <span className={style.label}>納入枚数</span>
                </span>
            </div>
            <Stepper steps={["確認", "ラフ", "清書", "納品"]} active={1} />
        </div>
    );
}

export default Task;