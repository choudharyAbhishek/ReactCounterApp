import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Button } from 'react-native';


export default class Component3 extends Component {
    constructor(){
        super();
        this.state={
            textValue : ""
        }
    }
    onChangeName(val){
        this.setState({textValue : val})
    }

    submitNameInput(){
        alert("Name has been Submitted")
    }

    render() {
        return (
            <View>
                <TextInput placeholder='Enter your name here' onChangeText={(val)=>this.onChangeName(val)}/>
                <Text>Name : {this.state.textValue}</Text>
                <Button onPress={this.submitNameInput} title='Submit' color='blue'/>
            </View>
        );
    }
}

AppRegistry.registerComponent('Component3', () => Component3);