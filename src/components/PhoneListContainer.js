import React from 'react';
import PhoneDetailComponent from './PhoneDetailComponent';
import "./PhoneListContainer.css"

export default class PhoneListContainer extends React.Component {
  render() {

    const selectedMobile = this.props.selectedMobile
    const onClick = this.props.onClick

    return (
      <ul className="elements__list--container">
        {
          this.props.mobiles.map(({ id, name, color, price, image, description, showDetails }) =>
            <PhoneDetailComponent
              key={id}
              id={id}
              name={name}
              color={color}
              price={price}
              image={image}
              description={description}
              showDetails={selectedMobile === id}
              onClick={onClick}
            />
          )
        }
      </ul>
    )
  }
}