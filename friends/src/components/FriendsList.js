import React from "react";

import axios from 'axios';


class FriendsList extends React.Component {
    state= {
        friends: [],
        error: ''
    };

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

    render() {
        return (
            <div className="FriendsList">
                <h1>My Friends</h1>

                {this.state.error && <h4>{this.state.error}</h4>}

                {this.state.friends.map(friends => (
                    <h2>{friends.name}</h2>
                    // <h4>Age: {friends.age}</h4>
                    // <h3>Email: {friends.email}</h3>
                ))}

            </div>
        )
    }
}

export default FriendsList;