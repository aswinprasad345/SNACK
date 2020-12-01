import * as React from 'react';
import { Text, View, StyleSheet , TextInput } from 'react-native';

export default class Receiver extends React.Component{
    render(){
        return(
            <View>
                <TextInput title="receiver"/>
            </View>
        )
    }
}