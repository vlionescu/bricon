import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faAngleUp,
  faExclamationCircle,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

import AppRouter from './routers/app-router';

import './App.css';

library.add(
    faAngleDown,
    faAngleUp,
    faExclamationCircle,
    faShoppingCart
);

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
