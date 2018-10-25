import React, { Component } from 'react';

import { connect } from 'react-redux';

class SelectedCity extends Component {
  render() {
    let name = "";
    let address = "";
    let source = "";

    if (this.props.selectedCity !== null) {
      name = this.props.selectedCity.name;
      address = this.props.selectedCity.address
      source = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`
    }

    return (
      <div className="selected-city">
        <h3>{name}</h3>
        <p>{address}</p>
        <img src={source} className="wagon-image"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  }
}

export default connect(mapStateToProps)(SelectedCity);
