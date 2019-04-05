import React from 'react';
import axios from 'axios';

// import DeleteFriend from './DeleteFriend';

class Friends extends React.Component {
    constructor() { 
        super();
        this.state = {
            friends: [],
            friend: {
                id: '',
                name: '',
                age: '',
                email: '',
            }
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends`)
            .then(response => {
                this.setState({ friends: response.data })
            })
            .catch(err => console.log(err));
    }

    // updateFriend = friend => {
    //     axios
    //         .put(`http://localhost:5000/friends/${friend.id}`, friend)
    //         .then(res => {
    //             this.setState({ friends: res.data });
    //         })
    //         .catch(err => console.log(err));
    // }

    // deleteFriend = friend => {
    //     axios 
    //         .delete(`http://localhost:5000/friends/${friend.id}`)
    //         .then(res => {
    //             this.setState({ friends: res.data })
    //         })
    //         .catch(err => console.log(err));
    // }

    postFriend = e => {
        axios
            .post(`http://localhost:5000/friends`, {
                name: this.state.name,
                age: Number(this.state.age),
                email: this.state.email
            }) 
            .then(response => {
                this.setState({ friends: response.data })
            })
            .catch(err => console.log(err));
    }

    handleChange = e => {
        e.persist();
        this.setState({ 
            ...this.state.friends,
            [e.target.name]: e.target.value 
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.postFriend}>
                    <label>
                        Id:
                        <input 
                            type="number"
                            name="id"
                            placeholder="ID"
                            onChange={this.handleChange}
                            // value={this.state.friend.id}
                        />
                    </label>
                    <label>
                        Name:
                        <input 
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            // value={this.state.friend.name}
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            onChange={this.handleChange}
                            // value={this.state.friend.age}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            // value={this.state.friend.email}
                        />
                    </label>
                    <button type="submit">Add Friend</button>
                    <button onClick={this.updateFriend}>Update Friend</button>
                </form>
                {this.state.friends.map(friend => {
                    return (
                        <div>
                            <p>{friend.id}</p>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                            <span onClick={this.deleteFriend}>X</span>
                            {/* <DeleteFriend
                                friends={this.state.friends}
                            /> */}
                        </div>
                    );
                })}
            </div>
        );
    }
}



export default Friends;