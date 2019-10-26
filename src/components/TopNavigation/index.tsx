/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import * as React from 'react';
import {
    Icon,
    TopNavigation,
    TopNavigationAction,
} from 'react-native-ui-kitten';

const BackIcon = (style: any) => (
    <Icon {...style} name='arrow-back'/>
);

interface IProps {
  onClick:any
}


const TopNav = ({ onClick }:IProps) => {

    const BackAction = <TopNavigationAction onPress={onClick} icon={BackIcon}/>

    return (
        <TopNavigation

            leftControl={BackAction}
            title='Application Title'
        />
    );
}


export default TopNav