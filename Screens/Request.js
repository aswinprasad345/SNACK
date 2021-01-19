import * as React from 'react';
import { Text, View, StyleSheet , TextInput , TouchableOpacity , KeyboardAvoidingView } from 'react-native';
import AppHeader from '../components/myHeader';
import db from '../Config.js';
import * as firebase from 'firebase';

export default class Request extends React.Component{
    constructor(){
        super();
        this.state = {
            book:'',
            reason:'',
            userID:firebase.auth().currentUser.email,
        }
    }
    createUniqueID=()=>{
        var a = Math.random()
        var b = a.toString(20)
        var c = b.substring(4)
        console.log(a,b,c)
        return Math
        .random()
        .toString(36)
        .substring(7)
    }
    addRequest=()=>{
        db
        .collection("request")
        .add({"book name":this.state.book,
              "fulfilled":false,
              "other":'',
              "reason":this.state.reason,
              "requestID":this.createUniqueID(),
              "date":firebase.firestore.FieldValue.serverTimestamp(),
              "userID":this.state.userID
    })
    console.log("************************")
    }
    render(){
        return(
            <View style={{
                flex:1
            }}>
                <AppHeader titles="Request-Books" navigation={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput placeholder="book" value={this.state.book} onChangeText={(text)=>{
                        this.setState({book:text})
                    }} style={styles.formTextInput}/>
                    <TextInput placeholder="reason" value={this.state.reason} onChangeText={(text)=>{
                        this.setState({reason:text})
                    }} style={styles.formTextInput}/>
                    <TouchableOpacity style={styles.button} onPress={this.addRequest}>
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
     keyBoardStyle : {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center' 
    }, 
    formTextInput:{
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    }, 
    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        }, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop:20 }, 
    })