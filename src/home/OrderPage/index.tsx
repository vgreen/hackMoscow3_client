import * as React from "react";
import {View} from "react-native";
import OrderCard from "../../components/OrderCard";
import useStoreon from "storeon/react";
import {IOrder} from "../../store/orderInfo.i";
import {OrderFull} from "../../components/OrderFull";
const mockOrders = [
    {
        name: 'Утюг',
        status: 'REGISTERED',
        order_date: '12.12.2018',
    },
    {
        name: 'Плойка',
        status: 'IN_PROGRESS',
        order_date: '12.12.2018',
    },
    {
        name: 'Телек',
        status: 'ASSIGNED',
        order_date: '34.12.2018',
    },
    {
        name: 'Чипсеки',
        status: 'DONE',
        order_date: '56.12.2018',
    }
];

const OrderPage = () => {

    function CardsArray(orders: IOrder[]){
        return orders.map((i, key) => <OrderCard key={key} data={i} />)
    }

    const { orders } = useStoreon('orders');
    const { curr_order } = useStoreon('curr_order');

    return (
        <View >
            {orders && CardsArray(orders)}
            <OrderFull order={orders[0]}/>
        </View>
    );

}

export default OrderPage;
