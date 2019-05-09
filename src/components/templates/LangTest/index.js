//put some content
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Button ,View,TouchableOpacity,Picker} from 'react-native';
import { textItem } from "../../../actions/index";

import {strings} from '../../../locales/Localization';
import { connect } from "react-redux";
import { TextInput } from 'react-native-gesture-handler';

class LangTest extends Component {
constructor(){
  super();
  this.state={
    selectedLanguage:'',
    text:'',
    sometext:""
  }
}
OnButtonPress= () =>
{
  console.log(this.state.text, "hhhhh")
  this.props.textItem(this.state);
  // this.props.navigation.navigate('LangTest1')
  
}  

overlang(){
    strings.setLanguage('it');
  this.setState({});
  }
  
onChangeText(text) {

console.log(text);

stringsoflanguages.setLanguage(text);
}
  render() {
    return (
      <View style = {styles.container}>
      <TouchableOpacity style={styles.btn} onPress = {() => this.overlang()}>
      <Text>Localization react native</Text>
      </TouchableOpacity>
      <Text style={{magrinleft:50,fontSize:18}}>{strings.how}</Text>
      <View style={{marginTop:20}}>
      <Picker style={{width:'80%'}}
      
       selectedValue={strings.how}
       onValueChange={(itemValue,itemIndex) => this.setState({selectedLanguage :itemValue})}
       onPress={() => this.overlang()}
      >
  <Picker.Item label="English" value={strings.how} />
  <Picker.Item label="Italian" value={strings.how} />
</Picker>
     
</View>
<Text style={{magrinleft:50,fontSize:18}}>what is ur {this.props.name}</Text>
  <TouchableOpacity style={styles.btn}  onPress = {this.OnButtonPress} >
  <Text>hello</Text>
  </TouchableOpacity>
  <TouchableOpacity 
            
            style={styles.input}
           

          >
          <Text>hello</Text>
          </TouchableOpacity>
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
   },

  input: {
        paddingRight: 25,
    paddingLeft: 25,
    backgroundColor:'blue'
  },
})

const mapStateToProps = (state) => {
  return {name:state.usename};
}

export default connect(mapStateToProps, {textItem})(LangTest);
