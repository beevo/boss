import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import BottomNav from './containers/BottomNav';
import WindowContainer from './containers/WindowContainer';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WindowContainer />
          {
            <BottomNav />
          }
        </div>
      </Provider>
    );
  }
}
export default App;
