import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          
            <Link to="/">Home</Link>
            <Link to="/addafriend">Add Friend</Link>
        </div> 

      <Route exact path="/" component={FriendsList} />
      <Route exact path="/addafriend" component={NewFriendForm} />   
        
      </div>
    );
  }
}

export default App;
