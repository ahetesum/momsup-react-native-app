import { StyleSheet, Dimensions, Sizes } from 'react-native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  controlContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
    marginTop: 62,
  },
  loginForm: {
    flex: 1,
  },
  loginAccountHolder: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  loginAccountText: {
    height: 22,
    color: '#454545',
    fontSize: 16,
    width: '100%',
    //font-family: Nunito;	
    fontWeight: '600',
    lineHeight: 22,
  },
  welcomeHolder: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  welcomeText: {
    height: 32,
    width: '100%',
    color: '#454545',
    //fontFamily: 'Nunito',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  forgotPassHolder: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    height: 19,
    width: '100%',
    color: '#FF785A',
    //font- family: Nunito; 
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
  },
  inputHolder: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#EFEFEF'
  },
  emailInput: {
    height: '100%',
    width: '100%',
    marginLeft: 10,
    color: '#454545',
    //font-family: Nunito;	
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 32,
    alignItems: 'flex-start',

  },
  loginButtonHolder: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  loginButton: {
    height: 55,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#19C5B9',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    width: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  socialMedia: {
    height: 250,
  },
  bubbleImageHolder: {
    width: 90,
    height: 90,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
    right: 5,
  },
  bubbleImage: {
    width: 70,
    height: 70,
  },
  bottomImageHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 90,
    position: 'absolute',
    bottom: 0,
  },
  bottomImage: {
    width: screenWidth,
    height: 90,
  },
  otherLoginHolder: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherLoginText: {
    height: 22,
    width: 140,
    color: '#454545',
    marginTop: -12,
    textAlignVertical: 'center',
    textAlign: 'center',
    //fontWeight: 'bold',
    //fontFamily: Nunito; 
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22
  },
  lineStyle1: {
    height: 1,
    marginLeft: 2,
    marginRight: 2,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },
  socialButtonHolder: {
    flexDirection: 'row',
    marginTop: 10,
    height: 68,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialMediaImage: {
    height: 56,
    width: 56,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  dontAccountHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
  },
  dontAccountText: {
    height: 19,
    width: '65%',
    color: '#454545',
    textAlign: 'right',
    marginRight: 5,
    //font- family: Nunito; 
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
  },
  signUpText: {
    height: 19,
    width: '100%',
    color: '#FF785A',
    //font- family: Nunito; 
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
    marginLeft: 5,
  },
  guestText: {
    height: 19,
    width: '100%',
    color: '#696DC3',
    //font- family: Nunito; 
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
    marginLeft: 5,
  },
});

export default styles;