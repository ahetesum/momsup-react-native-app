import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Container } from '../../atoms/Container';

export default class Home extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container >
                <View>
                    <Text>
                        Hello You are Home
                    </Text>
                </View>
            </Container>
        );
    }
}