import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      err: null,
    };
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
  }

  componentDidMount() {
    console.log('here');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    const { lat, err } = this.state;

    return lat ? <div>Loaction : {lat}</div> : err ? <div>Error: {err}</div> : <div>loading ... </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
