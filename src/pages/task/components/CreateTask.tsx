import Modal from "../../../components/modal/Modal";
import style from "./CreateTask.module.scss";

import IconClose from "@mui/icons-material/Close";
import axios from "axios";
import Switch from "../../../components/switch/Switch";
import { FormEvent, useState, useEffect, KeyboardEvent } from "react";
import TypeTask from "../../../types/TypeTask";
import TypeUsers from "../../../types/TypeUsers";
import TypeUser from "../../../types/TypeUser";

type props = {
    isShow: boolean;
    onClose: () => void;
}

const CreateTask = (props: props) => {

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        if(selectExistUser) {
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

        axios.post("http://localhost:8000/task/create",{
            user: {

            },
            talkroomId: 0,
            buyAt: new Date(),
            deliveryAt: new Date(),
            sales: 0,
            amount: 0,
            step: 0,
            isPinned: false
        } as TypeTask).then((response) => {
            console.log(response.data);
        }).catch(() => {
            console.log("APIに接続できませんでした");
        })
    }

    const [existUsers, setExistUsers] = useState<TypeUsers>(null);

    const getUsers = () => {
        if(props.isShow) {
            axios.get(
                "http://localhost:8000/user"
            ).then((response) => {
                setExistUsers(response.data);
            });
        } else {
            setExistUsers(null);
        }
    }

    useEffect(() => {
        getUsers();
    }, [props.isShow])

    const [selectExistUser, setSelectExistUser] = useState<boolean>(false);

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
                <form onSubmit={handleOnSubmit}>
                    <div className={style.switch}>
                        <Switch
                            name={"selectExistUser"}
                            onChange={() => setSelectExistUser((prev) => (!prev))}
                        />
                        <span>既存ユーザーを選択</span>
                    </div>
                    <div className={style.switch}>
                        <Switch name={"addPinned"} />
                        <span>ブックマークに追加</span>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>ユーザー名</span>
                            <input type="text" name="userName" disabled={selectExistUser} />
                        </div>
                        <div>
                            <span>ユーザー名</span>
                            <select name="user" disabled={!selectExistUser}>
                            {existUsers?.map((user: TypeUser) => {
                                return <option value={user.id} key={user.id}>{user.name}</option>
                            })}
                            </select>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>ユーザーID</span>
                            <input type="number" name="userId" disabled={selectExistUser} />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>トークルームURL</span>
                            <input type="text" name="talkroomUrl" />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>購入日</span>
                            <input type="date" name="buyAt" />
                        </div>
                        <div>
                            <span>納品予定日</span>
                            <input type="date" name="delivaryAt" />
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
                    <div className={style.submit}>
                        <input type="submit" value={"追加"} />
                    </div>
                </form>
            </div>
        </Modal>
    ) : null);
}

export default CreateTask;