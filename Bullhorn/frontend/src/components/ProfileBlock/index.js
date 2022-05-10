import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getUsers } from "../../actions";
import EditButton from "../EditButton";
import FollowButton from '../FollowButton';

const ProfileBlock = () => {

    const username = useParams().username;
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await getUsers(username);
            setUserInfo(data[0])
        }
        getData()
    }, [username])


    if (userInfo.main_user !== JSON.parse(document.getElementById('user_id').textContent)) {
        return (
            <>
                <img src={userInfo.profile_img}></img>
                <h1> {userInfo.display_name} </h1>
                <h2> @{userInfo.main_user} </h2>
                <FollowButton />
                <p> {userInfo.discription}</p>
            </>
        )
    } else {
        return (
            <>
                <img src={userInfo.profile_img}></img>
                <h1> {userInfo.display_name} </h1>
                <h2> @{userInfo.main_user} </h2>
                <p> {userInfo.discription}</p>
                <EditButton />
            </>
        )
    }
}

export default ProfileBlock
