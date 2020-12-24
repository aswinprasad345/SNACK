import * as React from 'react';
import { Text, View, StyleSheet , TextInput , TouchableOpacity } from 'react-native';
import { Header , Card } from 'react-native-elements';
import db from '../Config.js'

export default class Receiver extends React.Component{

    constructor(){
        super();
        this.state = {
            userID:firebase.auth().currentUser.email,
            userName:'',
            // receiverID:this.props.navigation.getParam('data'),
        }
    }

    componentDidMount(){
        console.log(this.props.navigation.getParam('data'));
    }

    fetchLoginedUser(){
        db
        .collection('users')
        .where()
        .get()
    }

    render(){
        return(
            <View>
                <View>
                    <Header 
                    leftComponent={<Icon name="arrow-left" type="font-awesome" color="#696969" size={25} onPress={()=>{
                        console.log(this.props.navigation);
                        this.props.navigation.goBack();
                      }}/>}
                    centerComponent = {{
                        text: 'Donate Books' ,
                        style:{
                            color:"#90a5a9",
                            fontSize:20,
                            fontWeight:'bold',
                        }
                }}
                    backgroundColor = "#eaf8fe"
                    />
                </View>
                <View>
                    <Card title={"Book Information"}>
                        <Card>
                            <Text></Text>
                        </Card>
                        <Card>
                            <Text></Text>
                        </Card>
                    </Card>
                </View>
                <View>
                <Card title={"Receiver Information"}>
                        <Card>
                            <Text></Text>
                        </Card>
                        <Card>
                            <Text></Text>
                        </Card>
                        <Card>
                            <Text></Text>
                        </Card>
                    </Card>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>I Want To Donate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}