import * as React from 'react';
import {View} from "react-native";
import {style} from './OrderCard.styles'
import {Avatar, Text} from "react-native-ui-kitten";
import {ICard} from "../../../constants";
import StatusOrderBar from "../StatusBar";

export interface IProps extends ICard{
}

type State = Readonly<{}>;

class OrderCard extends React.Component<IProps, State> {
    readonly state: State = {};

    render() {
        const { name, order_date, status} = this.props;
        return (
            <View style={style.CardWrapper}>
                <View style={style.PicHolder}>
                    <Avatar style={style.Avatar} source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}/>
                </View>
                <View style={style.Description}>
                    <Text style={style.Name}> {name}</Text>
                    <View style={style.StatusBar}>
                        <StatusOrderBar status={status}/>
                    </View>
                    <Text style={style.Date}>{order_date}</Text>
                </View>
            </View>
        );
    }
}

export default OrderCard;
