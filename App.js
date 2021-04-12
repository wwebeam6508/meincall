import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './src/Routes'
import configureStore from './src/redux/store';

class App extends Component {
   render() {
      const store = configureStore()
      return (
         <Provider store = { store }>
            <Routes />
         </Provider>
      )
   }
}
export default App