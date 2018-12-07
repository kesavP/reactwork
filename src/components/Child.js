import React, { Component } from 'react';
import '../styles/ChildComponent.css';

class Child extends Component{
    render(){
        return(
            <div className="APP">
                <header className="AppHeader">
                    <h1 className="bgblue">BlueHeader</h1>
                </header>
            </div>
        );
    }
}

export default Child;