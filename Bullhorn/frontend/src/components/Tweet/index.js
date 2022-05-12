import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getUsers } from "../../actions";
import FollowButton from '../FollowButton';

const Tweet = (props) => {
	const url = "profile/" + props.main_user;
	return (
		<>
			<div className="tweetBody">
				<div className="tweetProfileNameArea">
					<img src={props.pfp} className="tweetProfilePicture" />
					<a className="tweetUrl" href={url}><p className="tweetAuthor">{props.main_user}</p></a>
				</div>
				<div className="tweetTitleAudioArea">
					<h1 className="tweetTitle">{props.title}</h1>
					<audio className="tweetAudio" controls>
					<source src={props.audio} type="audio/mp3" />
					</audio>
				</div>
			</div>
		</>
	)
}

export default Tweet
