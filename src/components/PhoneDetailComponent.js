import React from 'react';

import "./PhoneDetailComponent.css"

export default class PhoneDetailComponent extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id)
    console.log(this.props.id)
  }
  render() {
    return (
      <li className="element__list" >
        <div>
          <p>{this.props.name}</p>
          <img className="element__image" src={this.props.image} /><br />
          <button className="btn__moreDetails" onClick={this.handleClick} id={this.props.id} role="button">
            ver detalles
        </button>
        </div >
        <div className={this.props.showDetails ? 'showMoreDetails' : 'hideMoreDetails'}>
          <button className="btn__close" onClick={this.handleClick}>X</button>
          <p>{this.props.name}</p>
          <p>Precio: {this.props.price}</p>
          <p>Color: {this.props.color}</p>
          <p>Descripcion: {this.props.description}</p>
          {this.props.showDetails}

        </div>
        <hr className="title__line" />


      </li >
    )

  }
}