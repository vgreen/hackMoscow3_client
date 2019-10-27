import {StyleSheet} from "react-native";
import {padding} from "../../../constants";

export const style = StyleSheet.create({
    text:{
        paddingLeft: 20,
        marginTop: 5,
        height: 20,
        fontSize: 20,
        fontWeight: '600',
    },
    PageWrapper:{
        position: 'absolute',
        display: 'flex',
        height:800,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    CardWrapper:{
        backgroundColor: 'white',
        height: 100,
        width: '94%',
        marginLeft: '3%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    PicHolder:{
        width: 95,
        padding: padding,
        paddingLeft: 15,
    },
    Avatar:{
        width: 75,
        height: 75,
    },
    Description:{
        padding: 12,
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 10,
    },
    Name:{
        height: 20,
        fontSize: 20,
        fontWeight: '600',
    },
    StatusBar:{
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 5,
        fontSize: 15,
        fontWeight: '400',
        height: 35
    },
    Date:{
        paddingLeft: 5,
        height: 20
    }

});