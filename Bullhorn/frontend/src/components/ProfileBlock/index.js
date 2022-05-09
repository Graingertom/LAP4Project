import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getUsers } from "../../actions";
import FollowButton from '../FollowButton';

const ProfileBlock = () => {

    const username = useParams().username;
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await getUsers(username);
            console.log(data[0])
            setUserInfo(data[0])
        }
        getData()
    }, [])


    console.log(userInfo)


    if (userInfo.mainUser !== username) {
        return (
            <>
                <img src={userInfo.ProfileImg}></img>
                <h1> {userInfo.displayName} </h1>
                <h2> @{userInfo.mainUser} </h2>
                <FollowButton />
                <p> This is a block to add a description about yourself, who you are, why are you using Bullhorn, is it for work? Is it for fun? Let everyone know here!</p>
            </>
        )
    } else {
        return (
            <>
                <img src={userInfo.ProfileImg}></img>
                <h1> {userInfo.displayName} </h1>
                <h2> @{userInfo.mainUser} </h2>
                <p> This is a block to add a description about yourself, who you are, why are you using Bullhorn, is it for work? Is it for fun? Let everyone know here!</p>
            </>
        )
    }
}

export default ProfileBlock
