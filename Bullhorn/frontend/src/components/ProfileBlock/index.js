import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { getFollowerInfo, getUsers } from "../../actions";
import EditButton from "../EditButton";
import FollowButton from '../FollowButton';
import BackButton from "../BackButton";

const ProfileBlock = () => {

    const goTo = useNavigate();
    const username = useParams().username;
    const [userInfo, setUserInfo] = useState([]);
    const [followerInfo, setFollowerInfo] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await getUsers(username);
            setUserInfo(data[0])
        }
        getData()
    }, [username])

    useEffect(() => {
        async function getFollower() {
            const followData = await getFollowerInfo(username);
            setFollowerInfo(followData[0].following.split(','))
        }
        getFollower()
    }, [username])

    const changeImage = () => {
        goTo('/edit/image')
    }


    if (userInfo.main_user !== JSON.parse(document.getElementById('user_id').textContent)) {
        return (
            <>
                <img src={userInfo.profile_img}></img>
                <h1> {userInfo.display_name} </h1>
                <h2> @{userInfo.main_user} </h2>
                <p> following: {followerInfo} </p>
                <FollowButton />
                <p> {userInfo.discription}</p>
            </>
        )
    } else {
        return (
            <>
                <img src={userInfo.profile_img}  onClick={changeImage}></img>
                <h1> {userInfo.display_name} </h1>
                <h2> @{userInfo.main_user} </h2>
                <p> following: {followerInfo.length} </p>
                <p> {userInfo.discription}</p>
                <EditButton />
                <BackButton />
            </>
        )
    }
}

export default ProfileBlock
