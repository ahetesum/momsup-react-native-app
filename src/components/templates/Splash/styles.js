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
        height: 683,
        position: 'absolute',
        bottom: 0,
    },
    bottomImage: {
        width: screenWidth,
        height: 683,
    },
});