import React from "react"
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lat: null
        }
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat : position.coords.latitude
                })
            },
            (error) => console.log(error))
        return(
            <div>Latitude:  {this.state.lat}</div>
        )
    }
}



 

ReactDOM.render(<App/>, document.querySelector("#root"))