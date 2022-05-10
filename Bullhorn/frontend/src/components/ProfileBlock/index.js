import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getUsers } from "../../actions";
import FollowButton from '../FollowButton';

const ProfileBlock = () => {

    const username = useParams().username;
    console.log(username)
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await getUsers(username);
            setUserInfo(data[0])
        }
        getData()
    }, [username])


    console.log(userInfo)


    if (userInfo.mainUser !== JSON.parse(document.getElementById('user_id').textContent)) {
        return (
            <>
                <img src={userInfo.profile_img}></img>
                <h1> {userInfo.display_name} </h1>
                <h2> @{userInfo.main_user} </h2>
                <FollowButton />
                <p> This is a block to add a description about yourself, who you are, why are you using Bullhorn, is it for work? Is it for fun? Let everyone know here!</p>
            </>
        )
    } else {
        return (
            <>
                <img src={userInfo.profile_img}></img>
                <h1> {userInfo.display_name} </h1>
                <h2> @{userInfo.main_user} </h2>
                <p> This is a block to add a description about yourself, who you are, why are you using Bullhorn, is it for work? Is it for fun? Let everyone know here!</p>
            </>
        )
    }
}

export default ProfileBlock
