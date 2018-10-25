import React, { Component } from 'react';

import CityList from '../containers/city_list.jsx';
import SelectedCity from '../containers/selected_city.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CityList />
        <SelectedCity />
      </div>
    );
  }
}

export default App;
