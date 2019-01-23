import React from 'react';

function NewFriendForm(props) {
    return (
        <form>
            <input
                value={props.name}
                type="text"
                name="name"
                placeholder="Enter your friend's name"
            />
            <input
                value={props.age}
                type="number"
                name="age"
                placeholder="Enter your friend's age"
            />
            <input
                value={props.email}
                type="text"
                name="email"
                placeholder="Enter your friend's email address"
            />
            <button type="submit">Add new friend</button>
        </form>
    )
}

export default NewFriendForm;