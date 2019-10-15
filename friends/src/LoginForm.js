import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit = () => {
        this.props(this.state)
        this.setState({
            username: '',
            password: '',
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit}>
                    <h2>Login form</h2>
                    <p>Username</p>
                    <input type='text' placeholder='Username' onchange={this.onUserNameChange} />

                    <p>Password</p>
                    <input type='text' placeholder='Password' onchange={this.onPasswordChange} />

                    <p>
                        <button>Submit</button>

                    </p>
                </form>
            </div>
        );
    }
}

export default LoginForm; 