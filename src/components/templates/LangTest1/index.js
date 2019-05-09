import React, {Component} from 'react';
import {View,Text} from  'react-native';
import { connect } from "react-redux";
import {strings} from '../../../locales/Localization';

class LangTest1 extends Component{
    constructor(props){
super(props);
this.state={
    text:this.props.text
}
    }
render(){
    return(
   <View style={{backagroundColor:"blue",flex:1}}>
       <Text style={{alignItems: 'center',justifyContent: 'center'}}>{this.props.navigation.state.param.text}</Text>
   </View>
    );
}
} 

const mapStateToProps = state => {
    const { text } = state.langTest;
}

export default connect(mapStateToProps, {})(LangTest1);