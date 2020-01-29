import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = {
    lat: null,
    err: null,
  };

  componentDidMount() {
    console.log('here');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
  }

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    const { lat, err } = this.state;

    return lat ? <SeasonDisplay lat={lat} /> : err ? <div>Error: {err}</div> : <div>loading ... </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
