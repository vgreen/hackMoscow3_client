import {StyleSheet} from "react-native";
import {borderRadius, padding} from "../../../constants";

export const style = StyleSheet.create({
    CardWrapper:{
        backgroundColor: '#c3eefa',
        height: 90,
        width: '94%',
        marginLeft: '3%',
        marginTop: 10,
        borderRadius: borderRadius,
        display: 'flex',
        flexDirection: 'row',
    },
    PicHolder:{
        width: 95,
        padding: padding,
        paddingLeft: 15,
    },
    Avatar:{
        width: 70,
        height: 70,
    },
    Description:{
        padding: 15,
        display: 'flex',
    },
    Name:{
        height: 20,
        fontSize: 20,
        fontWeight: '600',
    },
    StatusBar:{
        paddingLeft: 5,
        fontSize: 15,
        fontWeight: '400',
        height: 20
    },
    Date:{
        paddingLeft: 5,
        height: 20
    }

});