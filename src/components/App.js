import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      mobiles: [],
      selectedMobile: null
    };
  }

  componentDidMount() {
    var url = 'http://localhost:8001/phone';

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          mobiles: json
        });
      });
  }


  printMobiles() {
    let allMobiles = this.state.mobiles;
    return (
      <section className="container">
        <PhoneListContainer
          mobiles={allMobiles}
          selectedMobile={this.state.selectedMobile}
          onClick={this.handleClick}
        />
      </section>
    );
  }

  handleClick(mobileId) {
    if (this.state.selectedMobile === mobileId) {
      this.setState({
        selectedMobile: null
      })
    }
    else {
      this.setState({
        selectedMobile: mobileId
      })
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="conteainer__header">
          <div className="header__image"></div>
        </header>
        <hr className="header__separated"></hr>
        <section>
          <div className="section__title">
            <h1>Teléfonos móviles</h1>
          </div>
          <div>
            {this.printMobiles()}
          </div>
        </section>

      </div>
    );
  }
}

