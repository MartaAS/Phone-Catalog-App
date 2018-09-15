import React from 'react';

import "./PhoneDetailComponent.css"

export default class PhoneDetailComponent extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.id)
  }
  render() {
    return (
      <li onClick={this.handleClick} id={this.props.id} role="button">
        {this.props.name} < br />
        {this.props.showDetails}
        <p className={this.props.showDetails ? '' : 'moreDetails'}>
          {this.props.price}
          {this.props.showDetails}
        </p>
      </li >
    )

  }
}