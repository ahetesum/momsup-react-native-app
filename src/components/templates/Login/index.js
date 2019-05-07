//put some content
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Image, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { Button} from "../../atoms/Button";
import {Label} from "../../atoms/Label";
import {Container} from '../../atoms/Container';
import {Input} from '../../atoms/Input'
import {strings} from '../../../locales/Localization';
import loginStyles from './styles';



export default class Login extends Component {
render(){
  return(
      <Container >
     <View style={loginStyles.background}>
     <View style={{magrinLeft:20 ,alignItems:"flex-start"}}>
      <Label  label={strings.accountlogin} style={loginStyles.accountLogin}/>
      </View>
     <View style={{magrinLeft:20 ,alignItems:"flex-start"}}>
      <Label   label={strings.welcome}  style={loginStyles.welcome} />
      </View>
      <View style={{marginLeft:27.5,marginTop:50}}>
      <TextInput
      component={Input} 
      placeholder={strings.email}  
      // onChange = {(value)=>this.onChangeEmail(value)}
      />
      </View>
      <View style={{ marginTop: 10,marginLeft:27.5 }}>
      <TextInput component={Input} placeholder={strings.password}/>
    </View>
    <View style={loginStyles.forgotPasswordView}>
    <TouchableOpacity >
      <Label label={strings.forgot_password} style={loginStyles.forgotPasswordText}/>
      </TouchableOpacity>
    </View>
    <View style={loginStyles.buttonView}>
      <Button label={strings.login} />
    </View>
    
    <View style={{flexDirection:'row',marginLeft:96,marginTop:10}}>
    <View style={loginStyles.hairline} />
   <Text style={loginStyles.orLoginUsingText}>or login using</Text>
      <View style={loginStyles.hairline} />
      </View>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{color:'#EDEDED'}}>
      <Image style={loginStyles.facebookImage}
      source={require('../../../assets/facebook.png')}></Image>
    </TouchableOpacity> 
   
      
     <TouchableOpacity >
      <Image style={loginStyles.facebookImage}
      source={require('../../../assets/google-plus.png')}></Image>
    </TouchableOpacity> 
    </View>
    <View  style={{flexDirection:'row',marginLeft:91 ,marginTop:15,height:15,width:294}}> 
    <Text style={loginStyles.dontHaveAnAccount}>Don't have an account yet?</Text>
      <TouchableOpacity >
      <Text style={loginStyles.dontHaveAnAccount}> SIGN UP</Text>
    </TouchableOpacity>
    
    </View>
    <View style={{marginLeft:143,marginTop:15,width:100}}>
    <Text style={loginStyles.dontHaveAnAccount}>Continue as guest</Text>
    </View>
    </View> 
      </Container>
  );
  }
}
  
//   render() {
//     return (
//       <View style = {styles.container}>
//       <View >
// 						<Button label={strings.login} />
// 					</View>
      
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//      height: 350,
//   },
//    btn:{
//      height:50,
//      width:300,
//      marginTop:160,
//      marginLeft: 20,
//      backgroundColor:'green',
//      alignItems:'center',
//     justifyContent: 'center',
//    }
// })
