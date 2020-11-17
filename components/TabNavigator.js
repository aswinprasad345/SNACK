import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Request from '../Screens/Request';
import Donate from '../Screens/Donate';

export const TabNavigator = createBottomTabNavigator({
    Req:{
        Screen:Request,
        navigationOptions:{
            TabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:40,height:40}}/>,
            TabBarLabel:"Request Books"
        }
    },
    Don:{
        Screen:Donate,
        navigationOptions:{
            TabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:40,height:40}}/>,
            TabBarLabel:"Donate Books"
        }
    },
}) 