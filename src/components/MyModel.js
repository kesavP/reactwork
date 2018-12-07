import React, { Component } from 'react';

const backdropStyle ={
    'background-color': '#fefefe',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%'
}

const modalStyle = {
    backgroundColor : '#fff',
    borderRadius : 5,
    maxWidth :500,
    maxHeight :500,
    padding :30,
    position : 'relative'
}

const footerStyle = {
    position :'absolute',
    bottom : 2
}

export default class MyModal extends Component {  

    onClose = (e) =>{
        this.props.onClose && this.props.onClose(e);
    }

    render () {
        console.log("MY Model");
        if(!this.props.show){
            return null
          }
      return (
          <div style={backdropStyle}>
              <div style = {modalStyle}>
              <h2>This is a simple dialog</h2>
              {this.props.children}
              </div>
              <div style={footerStyle}>
                  <button onClick={(e) => {this.onClose(e)}}>
                  close
                  </button>
              </div>
          </div>
      );
    }
  };