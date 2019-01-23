import React, { Component } from 'react';

import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendsList />

          <NewFriendForm />
        </header>
      </div>
    );
  }
}

export default App;
