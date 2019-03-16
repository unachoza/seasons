import React from "react"
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lat: null,
            errorMessage: " "
        }
    }
    componentDidMount(){
        console.log('Mounted!')
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat : position.coords.latitud }),
            error => this.setState({errorMessage: error.message})
            )
        }
    componentDidUpdate(){
        console.log('updated', this.state.lat)
    }
    render(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if  (!this.state.errorMessage && this.state.lat ){
           return <SeasonDisplay lat={this.state.lat}/>
        }
        // else if (this.state.errorMessage && !this.state.lat ){
        //     return <div>{this.state.errorMessage} </div>
        
        return (
            <div>something{this.state.lat}</div>
            )
    }
   
    
}



 

ReactDOM.render(<App/>, document.querySelector("#root"))