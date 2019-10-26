import {Module, StoreonEvents} from 'storeon';
import {IOrder} from "./orderInfo.i";

export interface IOrderState {
    isFetching:boolean,
    orders:IOrder[],
}

const initOrderState: IOrderState = {
    isFetching:false,
    orders:[
    {
        "id": 1,
        "customer": {
            "id": 1,
            "name": "Иван",
            "surname": "Иванов",
            "homeAddress": null,
            "rating": 0,
            "numberOfMarks": 0
        },
        "courier": {
            "id": 1,
            "name": "Петр",
            "surname": "Петров",
            "homeAddress": null,
            "rating": 0,
            "numberOfMarks": 0
        },
        "orderStatus": "REGISTERED",
        "registrationDate": "26.10.2019 11:11",
        "assigningDate": null,
        "pickUpDate": null,
        "deliveryDate": null,
        "fromLocation": {
            "x": "55.751574",
            "y": "37.573856"
        },
        "toLocation": {
            "x": "54.751574",
            "y": "36.573856"
        },
        "goodsDescription": null,
        "review": null
    }
]
};

export interface IOrderEvents extends StoreonEvents<IOrder> {
    "setOrders": IOrder[];
    "setFetching": boolean;
}

const orderReducer: Module<IOrderState, IOrderEvents> = store => {
    store.on("@init", () => initOrderState);

    store.on("setOrders", (_state, orders:IOrder[]) => ({orders: orders}));
    store.on("setFetching", (_state, flag: boolean) => ({isFetching: flag}))
};

export default orderReducer;