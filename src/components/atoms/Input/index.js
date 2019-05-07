import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ style, placeholder, secureTextEntry, meta: { touched, error }, input: { value, onChange },color }) => {
	const { inputStyle, errorText } = styles;
	return (
		<View style={style}>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				placeholderTextColor={"gray"}
				autoCorrect={false}
				style={[inputStyle, color]}
				onChangeText={(value) => onChange(value)}
				value={value}/>
			{ touched && error && <Text style={errorText}>{error}</Text>}
		</View>
  	);
};

const styles = {
  	inputStyle: {
		backgroundColor: '#EFEFEF',
		height:50,
		width:320,
		borderRadius: 6,
		textAlign : "center",
		fontFamily: "Lato",
		placaholdeTextColor:'rgba(199,199,199,1)',
		textHeight:17,
		textWidth:44,
		fontSize: 14,
		letterSpacing: 0.58,
		lineHeight: 17,
	  },
	  email:{
		height: 17,
		width: 44,
		color: 'rgba(199,199,199,1)',
		fontFamily: 'Lato',
		fontSize: 14,
		letterSpacing: 0.58,
		lineHeight: 17,
		textAlign: 'center',
	  },
	  
  	labelStyle: {
		paddingVertical: 5, 
		fontSize: 16,
		textAlign: "left"
	},
	errorText: {
		color: "red"
	}
};

export { Input };
