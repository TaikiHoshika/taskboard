import Modal from "../../../components/modal/Modal";
import style from "./CreateTask.module.scss";

import IconClose from "@mui/icons-material/Close";
import axios from "axios";
import Switch from "../../../components/switch/Switch";
import { useState } from "react";

const options = [
    {value: "10000", label: "User01"},
    {value: "10001", label: "User02"},
    {value: "10002", label: "User03"},
]

type props = {
    isShow: boolean;
    onClose: () => void;
}

const CreateTask = (props: props) => {
    const [isCreateNewUser, setIsCreateNewUser] = useState<boolean>(false);
    const [isPinned, setIsPinned] = useState<boolean>(false);

    const onCreate = () => {
        axios.post("http://localhost:8000/task/create", {
            test: "test"
        }).then((response) => {
            console.log(response.data);
        }).catch(() => {
            console.log("Error");
        })
    }

    const onChangeIsCreateNewUser = () => {
        setIsCreateNewUser((prev) => !prev);
    }
    const onChangeIsPinned = () => {
        setIsPinned((prev) => !prev);
    }

    return (props.isShow ? (
        <Modal>
            <div className={style.container}>
                <form>
                    <div className={style.title}>
                        <span>タスクを登録</span>
                    </div>
                    <div className={style.switch}>
                        <Switch onChange={onChangeIsCreateNewUser} />
                        <span>新規ユーザーを登録 {isCreateNewUser + ""}</span>
                    </div>
                    <div className={style.switch}>
                        <Switch onChange={() => alert("test")} />
                        <span>ピン止め {isPinned + ""}</span>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>ユーザー名</span>
                            <select disabled={isCreateNewUser}>
                                <option>User01</option>
                                <option>User02</option>
                                <option>User03</option>
                            </select>
                        </div>
                        <div>
                            <span>ユーザー名</span>
                            <input type="text" disabled={!isCreateNewUser} />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                        </div>
                        <div>
                            <span>ユーザーID</span>
                            <input type="number" disabled={!isCreateNewUser} />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>トークルームURL</span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>購入日</span>
                            <input type="date" />
                        </div>
                        <div>
                            <span>納品予定日</span>
                            <input type="date" />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>納入枚数</span>
                            <input type="number" />
                        </div>
                        <div>
                            <span>売上</span>
                            <input type="number" />
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