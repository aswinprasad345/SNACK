import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from '../components/myHeader';

export default class Request extends React.Component{
    constructor(){
        super();
        this.state = {
            requestList:[],
        }
    }
    componentDidMount() {
        this.getRequest();
    }
    getRequest(){
        db
        .collection("request")
        .onSnapshot((snapshot)=>{
            console.log(snapshot)
        })
    }
    render(){
        return(
            <View>
                <AppHeader titles="Donate-Books"/>

            </View>
        )
    }
}