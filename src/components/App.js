import React, { Component } from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobiles: []
    };
  }

  componentDidMount() {
    var url = 'http://localhost:8001/phone';

    fetch(url)
      .then(response => response.text())
      .then(json => {
        this.setState({
          mobiles: json
        });
        console.log(this.state.mobiles)
      });
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Holaaa</h1>
        </header>

      </div>
    );
  }
}

