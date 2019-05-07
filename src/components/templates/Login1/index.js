import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from "../../atoms/Button";
import { Label } from "../../atoms/Label";
import { Container } from '../../atoms/Container';
import { Input } from '../../atoms/Input'
import { strings } from '../../../locales/Localization';
import loginStyles from './styles';
import styles from '../Login1/styles';


export default class Login extends Component {
    render() {
        return (
            <Container >
                <View style={styles.mainContainer}>
                    <View style={styles.bubbleImageHolder}>
                        <Image style={styles.bubbleImage} source={require('../../../assets/top_icon.png')}></Image>
                    </View>
                    <View style={styles.controlContainer}>
                        <View style={styles.loginForm}>
                            <View style={styles.loginAccountHolder}>
                                <Text style={styles.loginAccountText} >{strings.accountlogin}</Text>
                            </View>
                            <View style={styles.welcomeHolder}>
                                <Text style={styles.welcomeText} >{strings.welcome}</Text>
                            </View>
                            <View style={styles.inputHolder}>
                                <TextInput style={styles.emailInput} placeholder={strings.email}></TextInput>
                            </View>
                            <View style={styles.inputHolder}>
                                <TextInput style={styles.emailInput} placeholder={strings.password} ></TextInput>
                            </View>
                            <View style={styles.loginButtonHolder}>
                                <Button style={styles.loginButton} >{strings.login}</Button>
                            </View>
                        </View>
                        <View style={styles.socialMedia}></View>
                    </View>


                    <View style={styles.bottomImageHolder}>
                        <Image style={styles.bottomImage} source={require('../../../assets/bottom_bg.png')}></Image>
                    </View>
                </View>
            </Container>
        );
    }
}