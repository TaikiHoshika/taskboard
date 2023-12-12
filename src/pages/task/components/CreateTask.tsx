import Modal from "../../../components/modal/Modal";
import style from "./CreateTask.module.scss";

import IconClose from "@mui/icons-material/Close";

type props = {
    isShow: boolean;
    onClose?: () => void;
}

const CreateTask = (props: props) => {
    return (props.isShow ? (
        <Modal>
            <div className={style.container}>
                <div>
                    <span>タスクを登録</span>
                </div>
                <div>
                    
                </div>
                <button onClick={props.onClose}>
                    <IconClose />
                </button>
            </div>
        </Modal>
    ) : null);
}

export default CreateTask;