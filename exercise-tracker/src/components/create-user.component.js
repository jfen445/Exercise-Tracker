import React, { Component } from 'react';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //the state is how we create variables in react 
        this.state = {
            username: '',
        }
    }

    //this function is called when someone enters a username
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        //prevents the default html form from taking place
        e.preventDefault();

        const user= {
            username: this.state.username,
        }    
        
        //submits the user to the database
        console.log(user)
        //once the user is submitted, clear the username so they can enter multiple users
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )   
    }
}