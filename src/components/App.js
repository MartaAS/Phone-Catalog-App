import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer.js';
import { connect } from 'react-redux';
import Spinner from './Spinner.js';


class App extends React.Component {

  render() {
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
          {this.props.isLoadingMobiles ? <Spinner /> : ''}
          <div>
            <section className="container">
              <PhoneListContainer />
            </section>
          </div>
        </section>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingMobiles: state.mobileReducer.listMobiles.length === 0
})

export default connect(mapStateToProps)(App)
