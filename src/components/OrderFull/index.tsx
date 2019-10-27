import * as React from 'react';
import {View} from "react-native";
import TopNav from "../TopNavigation";
import useStoreon from "storeon/react";
import {style} from "./OrderFull.style";
import {Avatar, Button, Text} from "react-native-ui-kitten";
import StatusOrderBar from "../StatusBar";
import {IOrder} from "../../store/orderInfo.i";
import {checkNullableString} from "../../../constants";
import {getAvatar} from "../../images";
import MapView from "../../home/Map";

interface IProps {
    order: IOrder
}

export const OrderFull = ({order}: IProps) => {

    const {dispatch, showFullOrder} = useStoreon('showFullOrder');

    return (
        <View style={[{width: showFullOrder ? '100%': '0%'},style.PageWrapper]}>
            <TopNav onClick={() => {dispatch('showFullOrder', false)}}/>
            <View style={style.CardWrapper}>
                <View style={style.PicHolder}>
                    <Avatar style={style.Avatar}
                            source={getAvatar(order.id)}/>
                </View>
                <View style={style.Description}>
                    <Text style={style.Name}> {order.name}</Text>
                    <View style={style.StatusBar}>
                        <StatusOrderBar status={order.orderStatus}/>
                    </View>
                    <Text style={style.Date}>{checkNullableString(order.pickUpDate) }</Text>
                </View>
            </View>
            <Text style={style.text}>{'Цена: ' + order.price}</Text>
            <Text style={style.text}>{'Описание: ' + order.goodsDescription}</Text>
            <Text style={style.text}>{'Заказчик: ' + order.customer.name + ' ' + order.customer.surname}</Text>
            <Text style={style.text}>{'Дата регистрации заказа: ' + order.registrationDate}</Text>
            <Text style={style.text}>Маршрут курьера</Text>
            <View style={{height: 300, marginTop: 20}}>
                <MapView />
            </View>



        </View>
    );
};
