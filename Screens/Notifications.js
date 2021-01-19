import * as React from 'react';
import { Text, View, StyleSheet , TextInput , TouchableOpacity , KeyboardAvoidingView , FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import AppHeader from '../components/myHeader';
import db from '../Config.js';
import * as firebase from 'firebase';
import { List } from 'react-native-paper';
import SwipeableFlatList from '../components/SwipeableFlatList';

export default class Nofications extends React.Component{

    constructor(){
        super();
        this.state = {
            targetUserID:firebase.auth().currentUser.email,
            notificationList:[],
        }
    }

    componentDidMount(){
        this.getNotifications();
    }
    
    getNotifications=()=>{
        db
        .collection('notifications')
        .where("targetUserID","==",this.state.targetUserID)
        .where("notificationStatus","==","unread")
        .onSnapshot((snapshot)=>{
            console.log(snapshot)
            var temp = []
            snapshot.docs.map((doc)=>{
                temp.push(doc.data())
            })
            this.setState({notificationList:temp});
            console.log(this.state.notificationList)
        })
    }
    
    render(){
        return(
            <View>
                <AppHeader titles="Notifications" navigation={this.props.navigation}/>
                <SwipeableFlatList nofications = {this.state.notificationList}/>
            </View>
        )
    }
}