import React from "react";

// import axios from 'axios';

// import FriendForm from './FriendForm';

import styled from 'styled-components';

const FriendCard = styled.div`
    text-align: center;
`;


const NameH2 = styled.h2`
    font-family: 'Noto Serif SC', serif;
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 1%;
    padding-left: 1%;
`;

const AgeH4 = styled.h4`
    font-family: 'Noto Serif SC', serif;
    font-size: 1rem;
    font-weight: 400;
    padding-left: 1%;
`;

const EmailH3 = styled.h3`
    font-family: 'Noto Serif SC', serif;
    font-size: 1.2rem;
    font-weight: 600;
    padding-left: 1%;
`;

const Button = styled.button`
    border-radius: 4px;
    margin-left: 1%;
    background-color: black;
    color: white;
    line-height: 1.2rem;
`;


function FriendsList(props) {
    console.log(props);
    return (
        <div className="friendsList">
            {props.friends.map(friend => (
                <FriendCard key={friend.id}>
                    <hr />
                    <NameH2>{friend.name}</NameH2>
                    <AgeH4>Age: {friend.age}</AgeH4>
                    <EmailH3>Email: {friend.email}</EmailH3>
                    <Button onClick={e => props.toFriendForm(e, friend.id)}>Update</Button>
                    <Button onClick={e => props.deleteFriend(e, friend.id)}>Delete</Button>
                    <hr />
        
                </FriendCard>
            ))}
        </div> 
    );
}

export default FriendsList;