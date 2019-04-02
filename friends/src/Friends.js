import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    constructor() { 
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends`)
            .then((response)  => {
                this.setState({ friends: response.data })
            })
            .catch(err => console.log(err));
    }

    post() {
        
    }

    update() {

    }

    delete() {

    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Friend Name:
                        <input 
                            type="text"
                            name="name"
                        />
                    </label>
                    <button>Save Friend</button>
                </form>
                {this.state.friends.map(friend => {
                    return (
                        <div>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}



export default Friends;