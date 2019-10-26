import * as React from 'react';
import {View} from "react-native";
import {Text} from "react-native-ui-kitten";

interface IProps {
    status: string
}

const mapStatusToBar = {
    REGISTERED:{
        text: 'ЗАКАЗ ЗАРЕГЕСТРИРОВАН',
        step: 1
    },
    IN_PROGRESS:{
        text: 'ЗАКАЗ ВЗЯТ В РАБОТУ',
        step: 2
    },
    ASSIGNED:{
        text: 'КУРЬЕР ДОСТАВЛЯЕТ ЗАКАЗ',
        step: 3
    },
    DONE:{
        text: 'ЗАКАЗ ДОСТАВЛЕН',
        step: 4
    }
};

type State = Readonly<{}>;

class index extends React.Component<IProps, State> {

    makeBarBalls(statusNum:number){
        for(let i = 0; i < statusNum; i++){
            return <View />
        }
        for(let i = statusNum; i < 4; i++){
            return <View />
        }
    }

    render() {
        const { status } = this.props;
        return (
            <View>
                <Text>{mapStatusToBar[status].text}</Text>
                <View>
                    {this.makeBarBalls(mapStatusToBar[status].step)}
                </View>
            </View>
        );
    }
}

export default index;
