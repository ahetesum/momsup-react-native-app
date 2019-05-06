//put some content
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';


import {strings} from '../../../locales/Localization';




export default class App extends Component {

  overlang(){
    strings.setLanguage('it');
  this.setState({});
  }
  render() {
    return (
      <View style = {styles.container}>
      <TouchableOpacity style={styles.btn} onPress = {() => this.overlang()}>
      <Text>Localization react native</Text>
      </TouchableOpacity>
      <Text>{strings.how}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
     height: 350,
  },
   btn:{
     height:50,
     width:300,
     marginTop:160,
     marginLeft: 20,
     backgroundColor:'green',
     alignItems:'center',
    justifyContent: 'center',
   }
})
