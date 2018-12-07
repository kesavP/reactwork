import React, { Component } from 'react';
import Buttonclick from '../containers/ButtonClickContainer';
import PropsView from '../components/PropsView';
import Child from '../components/Child';

class App extends Component{
    render(){
        return (
            <div>
                <Buttonclick></Buttonclick>
                <PropsView></PropsView>
                <Child></Child>
            </div>
        );
    }
}

export default App;