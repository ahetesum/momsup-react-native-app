import {StyleSheet,Dimensions,Sizes} from 'react-native';
 const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor: '#FFFFFF',
      height: 667,	
      width: 450
    },
    accountLogin:{
      height: 22,
      width: 161,
      color: '#454545',
      fontFamily: 'Nunito',
      fontSize: 16,
      fontWeight:'600',
      lineHeight: 22,
      marginLeft:20,
      marginTop:92
    },
    welcome :{	
      height: 32,
      width: 245,
      color: '#454545',	
      fontFamily:'Nunito',	
      fontSize: 24,
      fontWeight: '300',	
      lineHeight: 24,	
      textAlign: 'center',
      alignItems: 'center',
      justifyContent:'center',
      marginTop:27,
      marginLeft:20
    },
    register:{
      height: 32,
      width: 114,
      color: '#000000',
      fontFamily: 'Lato',
      fontSize: 26,
      fontWeight: '300',
      lineHeight: 32,
      textAlign: 'center'
    },
    forgotPasswordView: {
      height:25,
      
      width:200,
      marginTop: 20, 
      alignItems: "flex-start"
  },
    forgotPasswordText: {
      fontSize: 18, 
      color:'#FF785A', 
      textAlign: "center",
      
  },
  buttonView: {
    marginTop: 5, 
    marginLeft: 30, 
},
hairline:{
  // boxSizing:'border-box',
    height: 2,
    marginTop:7,
    width: 49,
    borderRadius: 3 ,
    backgroundColor:'#B2C3CD',
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center'
    
},
orLoginUsingText:
{
  
  height: 15,
  width: 73,
  color: 'rgba(145,145,145,1)',
  fontFamily: 'Lato',
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  alignItems:'center',
},
facebookImage:{
  height: 39.72,
    width: 39.72,
    marginTop:15,
    marginLeft:100,
},
dontHaveAnAccount :{
    
    color: '#686868',
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 15,
    textAlign: 'center',
  },
    labelText: {
      marginLeft:20,
      marginTop:10,
      color:'white',
      fontSize:12,
    },
    icon: {
      alignItems: "flex-end", 
      justifyContent: "flex-end"
    },
    inputView: {
      flexDirection:"row",
      width:screenHeight*0.45,
      height: 40,
      borderColor: '#433E6B',
      borderBottomWidth: 0.5,
    },
    enterotpText:{
      height: 15,
        width: 242,
        color: '#5F5B5B',
        fontFamily: 'Lato',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 15
    },
    rcvText:{
      height: 15,
      width: 79,
      color:'#A6A5A5',
      fontFamily:'Lato',
      fontSize: 12,
      lineHeight: 15,
      textAlign: 'center',
      
    },
    resendText:{
      height: 15,
      width: 66,
      color:'#818181',
      fontFamily:'Lato',
      fontSize: 12,
      lineHeight: 15,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    linkText:{
      height: 38,
      width: 280,
      color: '#5F5B5B'	,
      fontFamily: 'Lato',
      fontSize: 16,
      lineHeight: 19,
      textAlign: 'center',
    },
    gotomail:{
      height: 17,
      width: 64,
      color: '#A1A1A1',
      fontFamily:'Lato',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 17,
      textAlign: 'center',
      textDecorationLine:'underline'
    },
    backtologinText:{
      height: 17,
      width: 114,
      color:'#CBC9C9',
      fontFamily:'Lato',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 17,
      textAlign: 'center',
      textDecorationLine:'underline'
    },
    backarrowView:{
      height: 10,
      width: 16,
      justifyContent: "center", 
      alignItems: "flex-start", 
      color: '#8D8D8D'
    },
    loginInput: {
      width:300,
      backgroundColor:'green',
      borderRadius:25,
      color:'#ffffff',
    
    },
    loginForm:{
      flex:1,
      backgroundColor:'#EDEDED',
      alignItems: 'center',
      justifyContent:"center"
    },
    loginContainer: {
      alignItems: 'flex-start',
      justifyContent:"center",
      height:130,
      marginTop:screenHeight*0.11
    },
    ImageLogo : {
      marginTop:screenHeight*0.11,
      height:120,
      width:120,
    },
    inputIcon: {
      height:15,
      width:15,
      marginTop:10,
      marginRight:5,
      tintColor:'#433E6B'
    },
    error: {
      color: 'red',
      width:  screenWidth* 0.85,
      textAlign: 'center',
      fontSize: 14,
      marginTop: 20
    },
    loginButton: {
      width:screenHeight*0.5,
      height:50,
      borderRadius:25,
      backgroundColor:"#67DADA",
      alignItems:"center",
      justifyContent: 'center',
      elevation: 8,
      shadowColor:'black',
      shadowOffset: {
        width:3,
        height:3,
      },
      shadowOpacity: 0.5,
      shadowRadius:5
    },
    
    forgotPassword: {
      marginTop:10,
      width:120,
      alignItems: 'center',
    },
    newForgetPassView: {
      width:screenHeight*0.5,
      alignItems:'flex-end',
      height:12,
      marginBottom:40
    },
    newRegitration: {
      marginTop:10,
      width:128,
      alignItems: 'center',
      marginBottom:10,
    },
    sumbitButton: {
      height:40,
      marginRight:20,
      borderRadius:10,
      padding:10
    },
  });
  
  export default styles;