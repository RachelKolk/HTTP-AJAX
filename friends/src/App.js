import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';



const Heading = styled.h1`
    font-family: 'Noto Serif SC', serif;
    font-size: 2.5rem;
    font-weight: 600;
    padding-left: 1%;
    text-align: center;
    background-color: gray;
    line-height: 7rem;
    color: white;
`;



const clearedFriend = {
  name: '',
  age: '',
  email: '',
};


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        friends: [],
        isUpdating: false,
        friend: {
          id: '',
          name: '',
          age: '',
          email: '',
        }
      };
  }

  componentDidMount() {
      axios.get("http://localhost:5000/friends")
      .then(res => {
          this.setState({
              friends: res.data,
              error: ''            
          });
      })
      .catch(err => {
          this.setState({error: err.response.data});          
      });
            
  }

  handleChanges = e => {
      e.persist();
      this.setState(prevState => {
          return {
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            } 
          }
      });
  };

  addFriend = () => {
    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(res => {
        this.setState({friends:res.data});
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({friends:res.data})
        this.props.history.push('/');
      })
  }

  toFriendForm = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
    this.props.history.push("/friend-form");
  };

  updateFriend = (id) => {
    axios
      .put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          friend: clearedFriend
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };



  render() {
    return (
      <div className="App">

        
        <Link className="NavLink" to="/">Home </Link> 
        <Link className="NavLink" to="/friend-form">Add Friend</Link>
        <Heading>My Friends</Heading>

        <Route
          exact path="/"
          render={props => (
            <FriendsList 
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              toFriendForm={this.toFriendForm}
            />
          )}
        />

        <Route
          path="/friend-form"
          render={props => (
            <FriendForm 
              {...props}
              friend={this.state.friends}
              handleChanges={this.handleChanges}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
              isUpdating={this.state.isUpdating}
            /> 
          )}
        />
        
        
      </div>
    );
  }
}

export default App;
