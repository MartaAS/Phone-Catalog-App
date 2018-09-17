import React from 'react';
import PhoneDetailComponent from './PhoneDetailComponent';
import "./PhoneListContainer.css"
import { connect } from "react-redux"
import { showMobileDetails, fetchMobiles } from './actions/actions.js';
import { hideMobileDetails } from './actions/actions.js';

class PhoneListContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchMobiles())
  }

  handleShowMobileDetails = (id) => {
    console.log("Debooo mostrar los detalles del telefono con id", id)
    this.props.dispatch(showMobileDetails(id))
  }

  handleHideMobileDetails = (id) => {
    console.log("Debooo ocultar los detalles del telefono con id", id)
    this.props.dispatch(hideMobileDetails())
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
              onShowMobileDetails={this.handleShowMobileDetails}
              onHideMobileDetails={this.handleHideMobileDetails}
            />
          )
        }
      </ul>
    )
  }
}

const connection = connect(state => {
  console.log("El state:", state)
  return {
    selectedMobile: state.mobileReducer.selectedMobile,
    mobiles: state.mobileReducer.listMobiles
  }
})

const PhoneListContainerConnected = connection(PhoneListContainer)

export default PhoneListContainerConnected
