import * as React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Header , Icon } from 'react-native-elements';

export default class AppHeader extends React.Component{
  
  constructor(props){
    super(props);
  }

    render(){
        return(
            <Header leftComponent={<Icon name="bars" type="font-awesome" color="#696969" size={25} onPress={()=>{
              this.props.navigation.toggleDrawer();
            }}/>} centerComponent={{
              text:this.props.titles,
              style:{
                color: '#90A5A9', 
                fontSize:20,
                fontWeight:"bold"
              }
            }}/>
        )
    }
}

const styles = StyleSheet.create({
    textContainer:{
      backgroundColor:"orange"
    },
    text:{
      color: 'white',
      padding: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  })