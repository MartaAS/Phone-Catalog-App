import React from 'react';
import { connect } from "react-redux"
import "./PhoneDetailComponent.css"
import { hideMobileDetails } from './actions/actions.js';

class PhoneDetailComponent extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id)
  }

  onHideMobileDetails = (id) => {
    this.props.dispatch(hideMobileDetails(id))
  }
  render() {
    return (
      <li className="element__list">
        <div>
          <p className="element__name">{this.props.name}</p>
          <img className="element__image" src={this.props.image} /><br />
          <button className="btn__moreDetails" onClick={this.handleClick} id={this.props.id} role="button">
            ver detalles
        </button>
        </div >
        <div className={this.props.showDetails ? 'showMoreDetails' : 'hideMoreDetails'}>
          <button className="btn__close" onClick={this.onHideMobileDetails}>X</button>
          <p className="element__details--name">{this.props.name}</p>
          <div className="element__details--block">
            <div>
              <span>Precio</span>
              <p className="element__details">{this.props.price}</p>
            </div>
            <div>
              <span>Color</span>
              <p className="element__details">{this.props.color}</p>
            </div>
          </div>
          <div className="element__details--description">
            <p>Descripción</p>
            <p className="element__details">{this.props.description}</p>
          </div>
          {this.props.showDetails}

        </div>
        <hr className="title__line" />


      </li >
    )

  }
}


const connection = connect(state => {
  console.log(state)
  return {
    selectedMobile: state.simpleReducer.selectedMobile
  }
})

const PhoneDetailComponentConnected = connection(PhoneDetailComponent)

export default PhoneDetailComponentConnected