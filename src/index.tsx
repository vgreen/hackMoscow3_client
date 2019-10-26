import {Component} from 'react';
import * as React from 'react';
import {Home} from "./home";

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
