import TypeUser from "./TypeUser";

type TypeTask = {
    id?: number;
    userId?: number;
    user: TypeUser;
    talkroomId: number;
    buyAt: Date;
    deliveryAt: Date;
    sales: number;
    amount: number;
    step: number;
    isPinned: boolean;
}

export default TypeTask;