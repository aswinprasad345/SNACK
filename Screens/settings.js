import * as React from 'react';
import { Text, View, StyleSheet , TextInput , KeyboardAvoidingView } from 'react-native';
import db from '../Config.js';
import firebase from 'firebase';
import  { ScrollView } from 'react-native-gesture-handler';

export default class Settings extends React.Component{

    constructor(){
        super();
        this.state = {
            firstname:'',
            lastname:'',
            postalAddress:'',
            contactNumber:'',
        }
    }

    componentDidMount() {
        this.userDetails();
    }

    userDetails=()=>{
        db
        .collection("users")
        .update({
            "firstname":this.state.firstname,
            "lastname":this.state.lastname,
            "postalAddress":this.state.postalAddress,
            "contactNumber":this.state.contactNumber,
        })
    }

    render(){
        return(
            <View>
                <ScrollView style={{
                    width:"100%"
                    }}>
                    <KeyboardAvoidingView>
                        <TextInput placeholder="firstname" value={this.state.firstname} onChangeText={(text)=>{
                        this.setState({firstname:text})
                        }} style={styles.textInput}/>
                        <TextInput placeholder="lastname" value={this.state.lastname} onChangeText={(text)=>{
                        this.setState({lastname:text})
                        }} style={styles.textInput}/>
                        <TextInput placeholder="postalAddress" value={this.state.postalAddress} onChangeText={(text)=>{
                        this.setState({postalAddress:text})
                        }} style={styles.textInput}/>
                        <TextInput placeholder="contactNumber" value={this.state.contactNumber} onChangeText={(text)=>{
                        this.setState({contactNumber:text})
                        }} style={styles.textInput}/>
                    </KeyboardAvoidingView>
                </ScrollView>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        marginTop:30, 
        backgroundColor:"rgba(11,11,11,0.1)",
        borderRadius:15,
        borderColor:"black",
        width:200,
        marginLeft:50
    }
})