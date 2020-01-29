import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
    state = { lat: null, err: null };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ err: err.message })
        );
    }
    renderLocationContent = ({ lat, err }) => {
        return lat ? <SeasonDisplay lat={lat} /> : err ? <div>Error: {err}</div> : <div><Spinner message="please accept location request" /></div>
    }

  render() {
      return <div>{this.renderLocationContent(this.state)}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
