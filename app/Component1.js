import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Abhishek',
            work: 'UI development',
            showData: true
        }
    }
    render() {
        console.log("hello abhi")
        let name = this.state.showData ? this.state.name : 'no name';
        let work = this.state.showData ? this.state.work : 'no work';
        return (
            <View>
                <Text>{this.props.welcome} Component</Text>
                <Text>{name}</Text>
                <Text>I work on {work}</Text>
            </View>
        );
    }

}
AppRegistry.registerComponent('Component1', () => Component1)
