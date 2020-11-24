import * as React from 'react';
import { Text , View , StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
    render(){
        return(
            <View style={styles.textContainer}>
                <Text style={styles.text}>{this.props.titles}</Text>
            </View>
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