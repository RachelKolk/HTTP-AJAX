import React from 'react';


function FriendForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
        if (props.isupdating) {
            props.updateFriend();
        } else {
            props.addFriend();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={props.friend.name}
                type="text"
                name="name"
                placeholder="Enter your friend's name"
                onChange={props.handleChanges}
            />
            <input
                value={props.friend.age}
                type="number"
                name="age"
                placeholder="Enter your friend's age"
                onChange={props.handleChanges}
            />
            <input
                value={props.friend.email}
                type="text"
                name="email"
                placeholder="Enter your friend's email address"
                onChange={props.handleChanges}
            />
            <button type="submit">
                {props.isUpdating ? 'Update Friend' : 'Add New Friend'}
            </button>
        </form>
    );
}



export default FriendForm;