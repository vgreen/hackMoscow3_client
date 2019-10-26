import * as React from "react";
import OrderPage from "./OrderPage";
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten'

class Home extends React.Component {
    render() {
        return (
            <>
                <ApplicationProvider mapping={mapping} theme={lightTheme}>
                    <OrderPage/>
                </ApplicationProvider>
            </>
        );
    }
}

export default Home;
