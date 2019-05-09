import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Container } from '../../atoms/Container';
import { strings } from '../../../locales/Localization';
import styles from '../Splash/styles';


export default class Splash extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container >
                <View style={styles.mainContainer}>
                    <View style={styles.bottomImageHolder} >
                        <Image style={styles.bottomImage} source={require('../../../assets/images/splash_main_bg.png')}></Image>
                    </View>
                </View>
            </Container >
        );
    }
}