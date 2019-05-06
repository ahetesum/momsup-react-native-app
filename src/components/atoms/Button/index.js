import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ onPress, label, disabled }) => {
  const { buttonStyle, textStyle } = styles;

  	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle} disabled={disabled}>
			<Text style={textStyle}>{label}</Text>
		</TouchableOpacity>
  	);
};

const styles = {
  	textStyle: {
		alignSelf: 'center',
		fontSize: 18,
        fontWeight: '800',
        height: 17,
        width: 50,
        color: 'rgba(255,255,255,1)',
        fontFamily: 'Lato',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.58,
        lineHeight: 17,
        textAlign: 'center',
  	},
  	buttonStyle: {
          height:50,
          width:320,
		backgroundColor: 'rgba(141,141,141,1)',
		borderRadius: 6,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10
  	}
};

export { Button };
