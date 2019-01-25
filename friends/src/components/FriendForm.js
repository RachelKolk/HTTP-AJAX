import React from 'react';

import styled from 'styled-components';

const EntryForm = styled.div`
    font-family: 'Noto Serif SC', serif;
    display: flex;
    justify-content: center;
    
`;

const InputForm = styled.input`
    font-family: 'Noto Serif SC', serif;
    justify-content: center;
    margin: 4%;
    line-height: 2.5rem;
    border-radius: 4px;
    width: 350px;
`;

const UpdateButton = styled.button`    
    line-height: 2rem;
    background-color: gray;
    color: white;
    font-family: 'Noto Serif SC', serif;
    width: 150px;
    border-radius: 4px;
    margin-left: 30%;
    text-align: center;
`;

function FriendForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
        if (props.isUpdating) {
            console.log("update");
            props.updateFriend();
        } else {
            console.log("add new");
            props.addFriend();
        }
    }

    return (
        <EntryForm>
        <form onSubmit={handleSubmit}>
            <InputForm
                value={props.friend.name}
                type="text"
                name="name"
                placeholder="Enter your friend's name"
                onChange={props.handleChanges}
                
            />
            <br/>
            <InputForm
                value={props.friend.age}
                type="number"
                name="age"
                placeholder="Enter your friend's age"
                onChange={props.handleChanges}
            />
            <br/>
            <InputForm
                value={props.friend.email}
                type="text"
                name="email"
                placeholder="Enter your friend's email address"
                onChange={props.handleChanges}
            />
            <br/>
            <UpdateButton type="submit">
                {props.isUpdating ? 'Update Friend' : 'Add New Friend'}
            </UpdateButton>
        </form>
        </EntryForm>
    );
}



export default FriendForm;