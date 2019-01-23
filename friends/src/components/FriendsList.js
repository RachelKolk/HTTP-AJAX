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
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="FriendsList">
                <h1>My Friends</h1>


            </div>
        )
    }
}

export default FriendsList;