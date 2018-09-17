import React, { Component } from 'react';
import PhoneListContainer from './PhoneListContainer.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showMobileDetails } from './actions/actions.js'
import { hideMobileDetails } from './actions/actions.js'
import Spinner from './Spinner.js';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mobiles: [],
  //     // isEmpty: true
  //   };
  // }



  render() {
    // console.log(this.state.isEmpty)
    // var isEmpty = true;
    //  console.log('is empty', this.state.mobiles.length)
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
