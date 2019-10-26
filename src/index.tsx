import {Component} from 'react';
import * as React from 'react';
import {Home} from "./home";
import { Provider }from 'storeon/react/context'
import store from './store'

class Main extends Component {
    render() {
        return (
            <>
                <Provider value={store}>
                    <Home />
                </Provider>
            </>
        );
    }
}


export default Main;
