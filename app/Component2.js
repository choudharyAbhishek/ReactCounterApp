import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class Component2 extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.onPressV1 = this.onPressV1.bind(this);
        this.onPressV3 = this.onPressV3.bind(this);
    }
    onPressV1() {
        this.setState({ count: this.state.count + 1 });
    }
    onPressV3() {
        this.setState({ count: this.state.count - 1 });

    }

    render() {
        let n = 'zero';
        n = this.state.count < 0 ? 'negative number' : n;
        n = this.state.count > 0 ? 'positive number' : n;
        return (
            <View>
                <View style={styles.body}>
                    <Text style={styles.text}>This is a counter</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.v1} onPress={this.onPressV1} underlayColor='white'>
                        <View>
                            <Text style={styles.text}>+</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.v2}>

                        <Text style={styles.text}>{this.state.count}</Text>
                        <Text>{n}</Text>
                    </View>

                    <TouchableOpacity style={styles.v3} onPress={this.onPressV3}>
                        <View>
                            <Text style={styles.text}>-</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'yellow'
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    }
});

AppRegistry.registerComponent('Component2', () => Component2);