import React, { useEffect, useState } from "react";
import axios from 'axios';
import Friend from './Friend';

const FriendsList = (props) => {
    const initstate = []
    

    const [friends, setFriends] = useState(initstate)

    useEffect(()=>{
        const token = localStorage.getItem("token");

        axios.get('http://localhost:9000/api/friends', {
          headers: {
            authorization: token
          }
        })
          .then(resp=> {
            // console.log("FriendsList", resp.data)
            setFriends(resp.data)
          })
          .catch(err=> {
            console.log(err.response.data);
          })

    },[])
    console.log("FriendsList", friends)
    return (
        <div className="friends-list">
            <h2>All of your friends!</h2>
            {/* <button onClick={handleClick}>Add More Friends!</button> */}
            {friends.map(friend => {
                return (<Friend friend={friend} key={friend.id} />);
            })}
        </div>
    )
}
export default FriendsList;