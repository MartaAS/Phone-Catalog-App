import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showMobileDetails } from './actions/actions.js'
import { hideMobileDetails } from './actions/actions.js'
import Spinner from './Spinner.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobiles: [],
    };
  }

  componentDidMount() {
    var url = 'https://api-catalog.herokuapp.com/phones';
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
        />
      </section>
    );
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

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  showMobileDetails: () => dispatch(showMobileDetails()),
  hideMobileDetails: () => dispatch(hideMobileDetails())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
