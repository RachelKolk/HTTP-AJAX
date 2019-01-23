import React from "react";

import axios from 'axios';

import styled from 'styled-components';

const NameH2 = styled.h2`
    font-size: 1.5rem;
    padding-top: 1.5%;
    padding-left: 1%;
`;

const AgeH4 = styled.h4`
    font-size: 1rem;
    padding-left: 1%;
`;

const EmailH3 = styled.h3`
    font-size: 1.2rem;
    Padding-left: 1%;
`;


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
                    <React.Fragment>
                    <NameH2>{friends.name}</NameH2>
                    <AgeH4>Age: {friends.age}</AgeH4>
                    <EmailH3>Email: {friends.email}</EmailH3>
                    <button>Update</button>
                    <button>Delete</button>
                    </React.Fragment>
                ))}

            </div>
        )
    }
}

export default FriendsList;