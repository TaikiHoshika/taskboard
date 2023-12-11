import { useState } from "react";
import {format as formatFns, utcToZonedTime} from "date-fns-tz";
import { differenceInCalendarDays } from "date-fns";
import ja from "date-fns/locale/ja";
import Stepper from "../../../components/stepper/Stepper";
import IconPin from "@mui/icons-material/PushPin";
import style from "./TaskCard.module.scss";
import TypeTask from "../../../types/TypeTask";

const formatDate = (date: Date, format: string): string => {
    return formatFns(utcToZonedTime(date, "Asia/Tokyo"), format, {locale: ja, timeZone: "Asia/Tokyo"})
}

const getDateDistance = (to: Date, from: Date): number => {
    return differenceInCalendarDays(utcToZonedTime(to, "Asia/Tokyo"), utcToZonedTime(from, "Asia/Tokyo"))
}

const TaskCard = (props: TypeTask) => {
    const [isPinned, setIsPinned] = useState(props.isPinned);
    const handleOnClickPinButton = async () => {
        setIsPinned(!isPinned);
        // バックエンドに問い合わせDB更新
    }

    return (
        <div className={style.container}>
            <div className={`${style.infomation} ${style.isPinned} ${isPinned && style.active}`}>
                <button onClick={handleOnClickPinButton}>
                    <IconPin />
                </button>
            </div>
            <div className={style.user}>
                <span>{props.user.name}</span>
            </div>
            <div className={`${style.infomation} ${style.buyAt}`}>
                <span className={style.label}>購入日</span>
                <span>{formatDate(props.buyAt, "MM/dd")} ({getDateDistance(new Date(), props.buyAt)}日経過)</span>
            </div>
            <div className={`${style.infomation} ${style.deliveryAt}`}>
                <span className={style.label}>納品予定日</span>
                <span>{formatDate(props.deliveryAt, "MM/dd")} (残り{getDateDistance(props.deliveryAt, new Date())}日)</span>
            </div>
            <div className={`${style.infomation} ${style.sales}`}>
                <span className={style.label}>売上</span>
                <span>{props.sales.toLocaleString()}円 ({Math.floor(props.sales * 0.78).toLocaleString()}円)</span>
            </div>
            <div className={`${style.infomation} ${style.amount}`}>
                <span className={style.label}>納入枚数</span>
                <span>{props.amount}点</span>
            </div>
            <div className={style.progress}>
                <Stepper steps={["確認", "ラフ", "清書", "納品"]} active={props.step} />
            </div>
        </div>
    );
}

export default TaskCard;