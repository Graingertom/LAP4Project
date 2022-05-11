import React from 'react';
import { useParams } from 'react-router-dom';
import { postFollower, postFollowing } from '../../actions';

const FollowButton = () => {

    const toFollow = useParams().username

    const follow = () => {
            postFollowing(toFollow);
            postFollower(toFollow);          
        }

    return(
    <>
        <button onClick={follow}>Follow</button>
    </>
    )
}

export default FollowButton
