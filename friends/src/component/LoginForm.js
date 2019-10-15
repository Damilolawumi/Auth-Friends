import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function LoginForm(props) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [loading, setLoading] = useState(false)

    const submit = () => {
        setLoading(true)
        axios.post('http://localhost:5000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(res => {
                setLoading(false)
                localStorage.setItem('payload', res.data.payload)
                
                props.history.push('/friends');
            })
            .catch(error => {
                setLoading(false)
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
                <button onClick={submit}>{loading ? "Loading" : "Submit"}</button>
            </div>
        </div>
    );
}
