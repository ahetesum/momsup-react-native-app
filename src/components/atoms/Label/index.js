//put some content
import React from 'react';
import {Text } from 'react-native';

const Label = ({ label, style, onPress }) => {
  	return (
  		<Text style={[styles.forgotPassword, style]} onPress={onPress}>{label}</Text>   
  	);
};

const styles = {
	labelStyle: {
		fontSize: 20,
		color: "black",
		textAlign: "center"
    },
    forgotPassword:{
        height: 15,
        width: 200,
        color: 'rgba(129,129,129,1)',
        fontFamily: 'Lato',
        fontSize: 12,
        lineHeight: 15,
    	textAlign: 'center',
    }
};

export { Label };