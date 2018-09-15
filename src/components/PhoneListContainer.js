import React from 'react';
import PhoneDetailComponent from './PhoneDetailComponent';

export default class PhoneListContainer extends React.Component {
  render() {

    const selectedMobile = this.props.selectedMobile
    const onClick = this.props.onClick

    return (
      <ul>
        {
          this.props.mobiles.map(({ id, name, color, price, showDetails }) =>
            <PhoneDetailComponent
              key={id}
              id={id}
              name={name}
              price={price}
              showDetails={selectedMobile === id}
              onClick={onClick}
            />
          )
        }
      </ul>
    )
  }
}