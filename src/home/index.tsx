import * as React from 'react';
import OrderPage from "./OrderPage";
import {light as lightTheme, mapping} from '@eva-design/eva';
import {ApplicationProvider, BottomNavigation, BottomNavigationTab, IconRegistry} from 'react-native-ui-kitten'
import MapView from "./Map";
import useStoreon from "storeon/react";
import {View} from "react-native";
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {BottomNav} from "../components/BottomNavigation";
import {viewHeight} from "../../constants";

interface IProps {
}

const pages = [<OrderPage/>,<MapView/>];

export const Home = (props: IProps) => {
    const {dispatch, viewPagerIndex} = useStoreon('viewPagerIndex');

    const handleMenuChange = (selectedIndex: number) => {
        dispatch('switchPage', selectedIndex)
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <View style={{...viewHeight}}>
                    {pages[viewPagerIndex]}
                </View>
                <BottomNav handleMenuChange={handleMenuChange}/>
            </ApplicationProvider>
        </>
    )
};


