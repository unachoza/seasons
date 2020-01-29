import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ' ',
    };
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => console.log(err)
    );
  }

  componentDidMount() {
    console.log('here');
  }

  componentDidUpdate() {
    console.log('updated');
  }

    render() {
        if (!this.state.lat) {
          return <div>loading .. </div>
      }
    return <div>Loaction : {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
