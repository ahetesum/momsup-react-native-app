import React from "react";
import { SafeAreaView } from "react-native";

const Container = (props) => {
    return (
		<SafeAreaView style={styles.containerStyle}>
			{props.children}
		</SafeAreaView>
  	);
}

const styles = {
    containerStyle: {
        flex: 1
    }
};

export { Container };
