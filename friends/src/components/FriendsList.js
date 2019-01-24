import React from "react";

// import axios from 'axios';

// import FriendForm from './FriendForm';

import styled from 'styled-components';


const NameH2 = styled.h2`
    font-family: 'Noto Serif SC', serif;
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 1.5%;
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

// const clearedFriend = {
//     name: '',
//     age: '',
//     email: '',
// };

// class FriendsList extends React.Component {
//     state= {
//         friends: [],
//         error: ''
//     };

    // componentDidMount() {
    //     axios.get("http://localhost:5000/friends")
    //     .then(res => {
    //         this.setState({
    //             friends: res.data,
    //             error: ''            
    //         });
    //     })
    //     .catch(err => {
    //         this.setState({error: err.response.data});          
    //     });
               
    // }

    // handleChanges = e => {
    //     e.persist();
    //     this.setState(prevState => {
    //         return: {
    //            friend: {
    //                ...prevState.item,
    //                [e.target.name]: e.target.value
    //            } 
    //         }
    //     });
    // };

//     render() {
//         return (
//             <div className="FriendsList">            

//                 {this.state.error && <h4>{this.state.error}</h4>}

//                 {this.state.friends.map(friend => (
//                     <React.Fragment>
//                     <NameH2>{friend.name}</NameH2>
//                     <AgeH4>Age: {friend.age}</AgeH4>
//                     <EmailH3>Email: {friend.email}</EmailH3>
//                     <Button>Update</Button>
//                     <Button>Delete</Button>
//                     </React.Fragment>
//                 ))}

//             </div>
//         )
//     }
// }

function FriendsList(props) {
    console.log(props);
    return (
        <div className="friendsList">
            {props.friends.map(friend => (
                <div className="FriendCard" key={friend.id}>
                    <NameH2>{friend.name}</NameH2>
                    <AgeH4>Age: {friend.age}</AgeH4>
                    <EmailH3>Email: {friend.email}</EmailH3>
                    <Button>Update</Button>
                    <Button onClick={e => props.deleteFriend(e, friend.id)}>Delete</Button>
        
                </div>
            ))}
        </div> 
    );
}

export default FriendsList;