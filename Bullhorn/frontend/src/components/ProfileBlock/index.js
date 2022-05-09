import React, {useEffect, useState } from "react";

import { getUsers } from "../../actions";
import FollowButton from '../FollowButton';

const ProfileBlock = () => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        async function getData () {
            const data = await getUsers();
            console.log(data)
            setUserInfo(data)
        }
        getData()
    }, [])

    console.log(userInfo)

    return(
        <>
        <img src={userInfo.ProfileImg}></img>
        <h1> {userInfo.displayName} </h1>
        <h2> @{userInfo.mainUser} </h2>
        <FollowButton />
        <p> This is a block to add a description about yourself, who you are, why are you using Bullhorn, is it for work? Is it for fun? Let everyone know here!</p>
        </>
    )
}

export default ProfileBlock
