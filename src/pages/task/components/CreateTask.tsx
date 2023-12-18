import Modal from "../../../components/modal/Modal";
import style from "./CreateTask.module.scss";

import IconClose from "@mui/icons-material/Close";
import axios from "axios";
import Switch from "../../../components/switch/Switch";
import { ChangeEvent, FormEvent } from "react";

type props = {
    isShow: boolean;
    onClose: () => void;
}

const CreateTask = (props: props) => {
    const onCreate = () => {
        axios.post("http://localhost:8000/task/create", {
            test: "test"
        }).then((response) => {
            console.log(response.data);
        }).catch(() => {
            console.log("Error");
        })
    }

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        console.log(`createNewUser?: ${form.get("isCreateNewUser")}`);
    }

    return (props.isShow ? (
        <Modal>
            <div className={style.container}>
                <form onSubmit={handleOnSubmit}>
                    <div className={style.title}>
                        <span>タスクを登録</span>
                    </div>
                    <div className={style.switch}>
                        <Switch name={"isExistUser"} />
                        <span>既存ユーザーを選択</span>
                    </div>
                    <div className={style.switch}>
                        <Switch name={"isPinned"} />
                        <span>ブックマークに追加</span>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>ユーザー名</span>
                            <input type="text" name="userName" />
                        </div>
                        <div>
                            <span>ユーザー名</span>
                            <select>
                                <option>User01</option>
                                <option>User02</option>
                                <option>User03</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>ユーザーID</span>
                            <input type="number" name="userId" />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div>
                            <span>トークルームURL</span>
                            <input type="text" name="talkroomId" />
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
                            <input type="number" name="amount" />
                        </div>
                        <div>
                            <span>売上</span>
                            <input type="number" name="sales" />
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