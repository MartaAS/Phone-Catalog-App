import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer.js';
import Spinner from './Spinner.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      mobiles: [],
      selectedMobile: null,
    };
  }

  componentDidMount() {
    var url = 'https://api-catalog.herokuapp.com/phones';
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          mobiles: json,
          loading: true
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

      // var element = document.getElementsByClassName('principal__container');
      // element[0].classList.remove('opacity');
    }
    else {
      this.setState({
        selectedMobile: mobileId
      })
      // var element = document.getElementsByClassName('principal__container');
      // element[0].classList.add('opacity');
    }
  }

  render() {
    var isEmpty = this.state.mobiles.length === 0;
    return (
      <div className="App" >
        <header className="conteainer__header">
          <div className="header__image"></div>
        </header>
        <hr className="header__separated"></hr>
        <section className="principal__container">
          <div className="section__title">
            <h1>Teléfonos móviles</h1>
          </div>
          {isEmpty ? <Spinner /> : ''}
          <div>
            {this.printMobiles()}
          </div>
        </section>

      </div>
    );
  }
}

