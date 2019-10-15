import React, { useRef } from 'react';
import withAuth from '../axios';

export default function AddNewFriend(props) {
    const name = useRef();
    const age = useRef();
    const email = useRef();

    const submit = () => {
        withAuth().post('http://localhost:5000/api/friends', {
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
        })
            .then(res => {
                
                props.history.push('/friends');
            })
            .catch(error => {
                debugger
                
                alert(error.response.data.error);
            });
    };

    return (
        <div className='login'>
            <div className='login-inputs'>
                name <input ref={name} type="text" />
                <br />
                age <input ref={age} type="text" />
                <br/>
                email <input ref={email} type="text" />
            </div>

            <div>
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    );
}
