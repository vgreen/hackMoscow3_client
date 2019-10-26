import * as React from 'react';
import {View} from "react-native";
import TopNav from "../TopNavigation";
import * as useStoreon from "storeon/react";

interface IProps {
}

const OrderFull = (props:IProps) => {

    const {dispatch, showFullOrder} = useStoreon('showFullOrder');

    return (
        <View >
            <TopNav onClick={dispatch('showFullOrder', false)}/>
        </View>
    );
};
