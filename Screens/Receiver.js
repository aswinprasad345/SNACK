import * as React from 'react';
import { Text, View, StyleSheet , TextInput } from 'react-native';
import db from '../Config.js'

export default class Receiver extends React.Component{

    fetchLoginedUser(){
        db
        .collection()
    }

    render(){
        return(
            <View>
                <TextInput title="receiver"/>
            </View>
        )
    }
}