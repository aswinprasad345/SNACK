import * as React from 'react';
import { Text, View, StyleSheet , FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../Config.js';
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
        .onSnapshot((datafromdb)=>{
            console.log(datafromdb)
            var temp = [];
            datafromdb.docs.map((map)=>{
               temp.push(map.data())
            })
            this.setState({requestList:temp})
        })
    }
    render(){
        return(
            <View>
                <AppHeader titles="Donate-Books"/>
                <FlatList 
                data = {this.state.requestList}
                renderItem={({item,i})=>(
                    console.log(item.i)
                    // <ListItem
                    // key={i}
                    // />
                    // <View>
                        // <Text>{"bookname : " + item["book name"]}</Text>
                        // <Text>{"fulfilled : " + item.fulfilled }</Text>
                        // <Text>{"other : " + item.other}</Text>
                        // <Text>{"reason : " + item.reason}</Text>
                        // <Text>{"userID : " + item.userID}</Text>
                    // </View>
                )}
                />
            </View>
        )
    }
}