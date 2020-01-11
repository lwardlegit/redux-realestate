import React, { Component } from 'react';
import './static/css/App.css';
import {Provider} from 'react-redux';

import Properties from './components/properties';
import Postform from './components/postform';
import store from './store';


export default class App extends Component {
  render(){
    return (
      <Provider store = {store}>
          <div className="App">
  
            <Postform/>
            <hr/>
            <Properties/>
          </div>
      </Provider>
    );
  }
}


