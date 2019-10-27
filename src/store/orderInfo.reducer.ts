import {Module, StoreonEvents} from 'storeon';
import {IOrder} from "./orderInfo.i";

export interface IOrderState {
    isFetching: boolean,
    orders: IOrder[],
    curr_order: IOrder | null
}

const initOrderState: IOrderState = {
    isFetching: false,
    orders: [
        {
            "name": "Заказ",
            "id": 1,
            price: 123,
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
    ],
    curr_order: null
};

export interface IOrderEvents extends StoreonEvents<IOrder> {
    "setOrders": IOrder[];
    "setFetching": boolean;
    "setCurrOrder": IOrder
}

const orderReducer: Module<IOrderState, IOrderEvents> = store => {
    store.on("@init", () => initOrderState);

    store.on("setOrders", (_state, orders: IOrder[]) => ({orders: orders}));
    store.on("setFetching", (_state, flag: boolean) => ({isFetching: flag}));
    store.on("setCurrOrder", (_state, curr_order:IOrder) => ({curr_order: curr_order}));

};

export default orderReducer;