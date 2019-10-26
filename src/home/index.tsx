import * as React from 'react';
import OrderPage from "./OrderPage";
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, BottomNavigation, BottomNavigationTab} from 'react-native-ui-kitten'
import {useState} from "react";
import {View} from "react-native";
import MapView from "./Map";

interface IProps {
}

export const Home = (props: IProps) => {
  const [page, setPage] = useState('order');

  return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <View style={{height:'93%'}}>
          {
              page === 'order' ? <OrderPage/> : <MapView />
          }
          </View>
          <BottomNavigation style={{height: '7%', marginBottom: 0}}>
              <BottomNavigationTab
                  title='DASHBOARD'
              />
              <BottomNavigationTab
                  title='SETTINGS'
              />
          </BottomNavigation>
      </ApplicationProvider>
  )
};


