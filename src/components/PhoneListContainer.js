import React from 'react';
import PhoneDetailComponent from './PhoneDetailComponent';
import "./PhoneListContainer.css"
import { connect } from "react-redux"
import { showMobileDetails } from './actions/actions.js';

class PhoneListContainer extends React.Component {
  onShowMobileDetails = (id) => {
    this.props.dispatch(showMobileDetails(id))
  }

  render() {
    console.log(this.props)

    const selectedMobile = this.props.selectedMobile

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
              onClick={this.onShowMobileDetails}
            />
          )
        }
      </ul>
    )
  }
}

const connection = connect(state => {
  console.log(state)
  return {
    selectedMobile: state.simpleReducer.selectedMobile
  }
})

const PhoneListContainerConnected = connection(PhoneListContainer)

export default PhoneListContainerConnected
