import Modal from "../../../components/modal/Modal";
import style from "./CreateTask.module.scss";

import IconClose from "@mui/icons-material/Close";
import axios from "axios";
import Switch from "../../../components/input/switch/Switch";
import { FormEvent, useState, useEffect, KeyboardEvent } from "react";
import TypeTask from "../../../types/TypeTask";
import TypeUsers from "../../../types/TypeUsers";
import TypeUser from "../../../types/TypeUser";
import HorizontalRule from "../../../components/horizontalRule/HorizontalRule";

type props = {
    isShow: boolean;
    onClose: () => void;
}

const CreateTask = (props: props) => {

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        /*
        if(selectExistUser) {
            form.userId = Number(form.get("user"));
            console.log(form.get("user"));
        } else {
            console.log(form.get("userName"));
            console.log(form.get("userId"));
        }

        console.log(form.get("talkroomUrl"));
        console.log(form.get("buyAt"));
        console.log(form.get("delivaryAt"));
        console.log(form.get("amount"));
        console.log(form.get("sales"));
        */
        
        const userName: string | null = form.get("userName")?.toString() || null;
        const userId: number | null = Number(form.get("userUrl")?.toString().replace(new RegExp("https://coconala.com/users/|/"), "")) || null;
        const user: number | null = Number(form.get("user")) || null;

        const talkroomId: number | null = Number(form.get("talkroomUrl")?.toString().replace(new RegExp("https://coconala.com/talkrooms/|/"), "")) || null;

        // 簡易バリデーション


        axios.post("http://localhost:8000/user",{
            coconalaId: userId,
            name: userName
        } as TypeUser).then((response) => {
            console.log(response.data);
            props.onClose();

        }).catch(() => {
            console.log("APIに接続できませんでした");
        })
    }

    const [selectExistUser, setSelectExistUser] = useState<boolean>(false);
    const [addPin, setAddPin] = useState<boolean>(false);
    const [useDetailedDelivaryDate, setUseDetailedDelivaryDate] = useState<boolean>(false);
    const [existUsers, setExistUsers] = useState<TypeUsers>(null);

    const getUsers = () => {
        if(props.isShow) {
            axios.get(
                "http://localhost:8000/user"
            ).then((response) => {
                setExistUsers(response.data);
            }).catch((error) => {
                setExistUsers(null);
            });
        } else {
            setExistUsers(null);
        }
    }

    useEffect(() => {
        getUsers();
    }, [props.isShow])

    return (props.isShow ? (
        <Modal>
            <div className={style.container}>
                <div className={style.header}>
                    <span>タスクを登録</span>
                    <button
                        className={style.closeButton}
                        onClick={props.onClose}
                    >
                        <IconClose />
                    </button>
                </div>
                <HorizontalRule />
                <form onSubmit={handleOnSubmit}>
                    <div className={style.row}>
                        <div>
                            <span>ユーザー名</span>
                            <input type="text" name="userName" disabled={selectExistUser} />
                        </div>
                        <div>
                            <span>ユーザーURL / ID</span>
                            <input type="text" name="userUrl" disabled={selectExistUser} placeholder="https://coconala.com/users/" />
                        </div>
                    </div>
                    <div  className={style.row}>
                        <div className={style.switch}>
                            <Switch
                                name={"selectExistUser"}
                                onChange={() => setSelectExistUser((prev) => (!prev))}
                            />
                            <span>既存ユーザーを選択</span>
                        </div>
                        <div>
                            <select name="user" disabled={!selectExistUser}>
                            {existUsers?.map((user: TypeUser) => {
                                return <option value={user.id} key={user.id}>{user.name}</option>
                            })}
                            </select>
                        </div>
                    </div>
                    <HorizontalRule />
                    <div className={style.row}>
                        <div>
                            <span>トークルームURL / ID</span>
                            <input type="text" name="talkroomUrl" placeholder="https://coconala.com/talkrooms/"/>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>購入日</span>
                            <input type="date" name="buyAt" />
                        </div>
                        <div>
                            <span>納品予定日</span>
                            <div className={style.hasUnit}>
                                <input type="number" name="delivaryAt" placeholder="必要週" defaultValue={2} disabled={useDetailedDelivaryDate} />
                                <span>週間</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.switch}>
                            <Switch
                                name={"useDetailedDelivaryDate"}
                                onChange={() => setUseDetailedDelivaryDate((prev) => (!prev))}
                            />
                            <span>納品予定日を任意設定</span>
                        </div>
                        <div>
                            <input type="date" name="delivaryAt" disabled={!useDetailedDelivaryDate} />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>納入枚数</span>
                            <input type="number" name="amount" defaultValue={1} />
                        </div>
                        <div>
                            <span>売上</span>
                            <input type="number" name="sales" defaultValue={3000} />
                        </div>
                    </div>
                    <div className={style.switch}>
                        <Switch
                            name={"addPin"}
                            onChange={() => setAddPin((prev) => (!prev))}
                        />
                        <span>ブックマークに追加</span>
                    </div>
                    <div className={style.submit}>
                        <input type="submit" value={"追加"} />
                    </div>
                </form>
            </div>
        </Modal>
    ) : null);
}

export default CreateTask;