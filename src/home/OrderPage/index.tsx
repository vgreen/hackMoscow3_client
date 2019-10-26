import * as React from "react";
import {View} from "react-native";
import OrderCard from "../../components/OrderCard";
import {ICard} from "../../../constants";

const mockOrders = [
    {
        name: 'Утюг',
        status: 'КУРЬЕР В ПУТИ',
        order_date: '12.12.2018',
    },
    {
        name: 'Плойка',
        status: 'КУРЬЕР В ПУТИ',
        order_date: '12.12.2018',
    },
    {
        name: 'Телек',
        status: 'КУРЬЕР В ТАМБОВЕ',
        order_date: '34.12.2018',
    },
    {
        name: 'Чипсеки',
        status: 'КУРЬЕР СХАВАЛ',
        order_date: '56.12.2018',
    }
];

class OrderPage extends React.Component {

    setCardsArray(orders: ICard[]):any{
        return orders.map((i, key) => <OrderCard key={key} name={i.name} status={i.status} order_date={i.order_date}/>)
    }

    render() {
        return (
            <View >
                {mockOrders && this.setCardsArray(mockOrders)}
            </View>
        );
    }
}

export default OrderPage;
