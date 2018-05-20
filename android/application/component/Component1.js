import React,{Component} from'react';
import {AppRegistery, Text, View} from 'react-native';

export default class Component1 extends Component{
    constructor(props){
        super(props);
        this.state={
            name : 'Abhishek',
            work : 'UI development',
            showData : true
        }
    }    
    render(){
        return(
            <View>
                <Text>Hello Component</Text>
                <Text>{this.state.name}</Text>
            </View>
        );
    }

}
/*    constructor(props){
        super(props);
        this.state={
            name : 'Abhishek',
            work : 'UI development',
            showData : true
        }
    }
render(){
    let name = this.state.showData ? this.state.name : 'no name';
    let work = this.state.showData ? this.state.work : 'no work';
    return(
        <View>
            <Text>{this.props.welcome}</Text>
            <Text>{name}</Text>
            <Text>{work}</Text>
        </View>
    );
}
*/
AppRegistery.registerComponent('Component1', () => Component1)
