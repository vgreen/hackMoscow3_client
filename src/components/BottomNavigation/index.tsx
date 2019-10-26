import {BottomNavigation, BottomNavigationTab} from "react-native-ui-kitten";
import * as React from "react";
import useStoreon from "storeon/react";

interface IProps {
    handleMenuChange: (value:number) => void
}

export const BottomNav = (props:IProps) =>  {

    const {viewPagerIndex} = useStoreon('viewPagerIndex');

    return (
        <BottomNavigation
            style={{height: '7%', marginBottom: 0}}
            onSelect={props.handleMenuChange}
            selectedIndex={viewPagerIndex}
        >
            <BottomNavigationTab
                title='Заказы'
            />
            <BottomNavigationTab
                title='Карта'
            />
        </BottomNavigation>
    )
};