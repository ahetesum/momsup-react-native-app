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
    height: 250,
  },
  loginAccountHolder: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  loginAccountText: {
    height: 22,
    color: '#454545',
    fontSize: 16,
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
    width: 245,
    color: '#454545',
    //font-family: Nunito;	
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
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
    height: 32,
    width: 245,
    marginLeft: 10,
    color: '#454545',
    //font-family: Nunito;	
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 32,
    alignItems: 'flex-start',

  },
  socialMedia: {
    backgroundColor: '#DEeeee',
    height: 250,
  },
  bubbleImageHolder: {
    width: 90,
    height: 90,
    position: 'absolute',
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


});

export default styles;