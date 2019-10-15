import React, { useState, useEffect } from 'react';
import withAuth from '../axios';


export default function Friends(props) {
    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        withAuth().get('http://localhost:5000/api/friends')
            .then(res => {

                setFriendList(res.data);
            })
            .catch(error => {


                alert(error.message);
            });
    }, []);


    return (
        <div className='friends'>
            {
                friendList.map(friend => (
                    <li key={friend.id}>{friend.name}</li>
                ))
            }
        </div>
    );
}
