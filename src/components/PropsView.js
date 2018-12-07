import React,{Component} from 'react';
import MyModel from '../components/MyModel';

class PropsView extends Component{
    constructor(props){
        super(props);

        this.state = {
            properties : [],
            showModel :false
        }
    }

    getComponent = () =>{
        this.setState({
            ...this.state,
            showModel : !this.state.showModel
        })

    }

    // componentDidMount(){
    //     fetch('http://localhost:9090/echo?limit=4',{
    //         method : 'GET'
    //     })
    //     .then(response => 
    //         response.json())
    //     .then(json => {
    //         // console.log("nkjdk ",json); 
    //         this.setState({
    //             properties : json
    //         })
    //     })
    // }

    render(){
        console.log("nkjdk ",this.state.properties);
        return(
            <div>
                <button onClick = {this.getComponent.bind(this)}>Edit</button>
                <MyModel onClose = {this.getComponent}
                show = {this.state.showModel}>
                    This Is My Model
                </MyModel>
            </div>
        );
    }
}

export default PropsView;