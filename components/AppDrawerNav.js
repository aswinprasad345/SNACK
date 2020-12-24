import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Drawer from './Drawer.js'
import Settings from '../Screens/settings.js';
import myDonation from '../Screens/myDonation';
import { TabNavigator } from './TabNavigator.js';

export const DrawerNav = createDrawerNavigator({
    Home:{
        screen:TabNavigator
    },
    Settings:{
        screen:Settings
    },
    myDon:{
        screen:myDonation
    }
},{
    contentComponent:Drawer
},{
    intialRouteName:"Home"
})
