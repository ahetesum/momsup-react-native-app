import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from "../../atoms/Button";
import { Label } from "../../atoms/Label";
import { Container } from '../../atoms/Container';
import { strings } from '../../../locales/Localization';
import styles from '../Login1/styles';


export default class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container >
                <View style={styles.mainContainer}>
                    <View style={styles.bubbleImageHolder}>
                        <Image style={styles.bubbleImage} source={require('../../../assets/images/top_icon.png')}></Image>
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
                                <TextInput style={styles.emailInput} secureTextEntry={true} placeholder={strings.password} ></TextInput>
                            </View>
                            <View style={styles.forgotPassHolder}>
                                <TouchableOpacity style={styles.forgotPassword}><Text style={styles.forgotPassword}>{strings.forgot_password}</Text></TouchableOpacity>
                            </View>
                            <View style={styles.loginButtonHolder}>
                                <TouchableOpacity style={styles.loginButton} ><Text style={styles.loginText}>{strings.login}</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.socialMedia}>
                            <View style={styles.otherLoginHolder}>
                                <View style={styles.lineStyle1}>
                                </View>
                                <View ><Text style={styles.otherLoginText}>{strings.other_login}</Text></View>
                                <View style={styles.socialButtonHolder}>
                                    <Image style={styles.socialMediaImage} source={require('../../../assets/images/facebook.png')}></Image>
                                    <Image style={styles.socialMediaImage} source={require('../../../assets/images/google_plus.png')}></Image>
                                </View>
                                <View style={styles.dontAccountHolder}>
                                    <Text style={styles.dontAccountText}>{strings.dont_account}</Text>
                                    <TouchableOpacity ><Text style={styles.signUpText} >{strings.sign_up}</Text></TouchableOpacity>
                                </View>
                                <View style={styles.dontAccountHolder}>
                                    <TouchableOpacity ><Text style={styles.guestText} >{strings.guest_sign}</Text></TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={styles.bottomImageHolder}>
                        <Image style={styles.bottomImage} source={require('../../../assets/images/bottom_bg.png')}></Image>
                    </View>
                </View>
            </Container >
        );
    }
}