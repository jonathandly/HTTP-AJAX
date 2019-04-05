import React from 'react';
import axios from 'axios';

const DeleteFriend = props => {
    // const friend = props.friends.find(person => `${person.id}` === props.match.params.id);

    const deletePerson = () => {
        axios 
            .delete(`http://localhost:5000/friends/${props.friends.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <span onClick={deletePerson}>X</span>
    );
}

export default DeleteFriend;