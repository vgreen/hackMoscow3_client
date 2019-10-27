import * as React from 'react';
import {TouchableOpacity, View} from "react-native";
import {style} from './OrderCard.styles'
import {Avatar, Text} from "react-native-ui-kitten";
import {checkNullableString} from "../../../constants";
import StatusOrderBar from "../StatusBar";
import useStoreon from "storeon/react";
import {IOrder} from "../../store/orderInfo.i";

export interface IProps {
    data: IOrder
}


const OrderCard = ({data}: IProps) => {

    const {dispatch, curr_order} = useStoreon('curr_order');
    const {showFullOrder} = useStoreon('showFullOrder');

    function openFullPage(data: IOrder) {
        console.log('1');
        console.log(data);
        dispatch('setCurrOrder', data);
        console.log('2');
        dispatch('showFullOrder', true);
        console.log('3');
        console.log(curr_order);
    }


    return (
        <TouchableOpacity onPress={() => {
            openFullPage(data)
        }}>
            <View style={style.CardWrapper}>
                <View style={style.PicHolder}>
                    <Avatar style={style.Avatar}
                            source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'}}/>
                </View>
                <View style={style.Description}>
                    <Text style={style.Name}> {data.name}</Text>
                    <View style={style.StatusBar}>
                         <StatusOrderBar status={data.orderStatus}/>
                    </View>
                    <Text style={style.Date}>{checkNullableString(data.pickUpDate)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default OrderCard;
