import React, { useRef } from 'react';
import axios from 'axios';

export default function LoginForm(props) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        axios.post('http://localhost:5000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(res => {
                // debugger
                // SUCCESS! Credentials are valid:
                //   1- Put the token string in local storage under a 'token' key
                localStorage.setItem('payload', res.data.payload)
                //   2- Redirect users to the /quotes route
                props.history.push('/friends');
            })
            .catch(error => {
                // debugger
                // Alert a sensible message pulled from the error object
                alert(error.response.data.message);
            });
    };

    return (
        <div className='login'>
            <div className='login-inputs'>
                username <input ref={usernameRef} type="text" />
                <br />
                password <input ref={passwordRef} type="text" />
            </div>

            <div>
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    );
}
