import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import BottomNav from './containers/BottomNav';
import WindowContainer from './containers/WindowContainer';
import store from './store';

class App extends Component {
  render() {
    var Foo = "CurrentApp";
    return (
      <Provider store={store}>
        <div className="App">
          {
            // <PostForm />
          }
          {
            // <Posts />
          }

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
