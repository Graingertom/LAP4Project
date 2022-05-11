import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getUsers } from "../../actions";
import FollowButton from '../FollowButton';

const Tweet = (props) => {
	const url = "profile/" + props.main_user;
	return (
		<>
			<div class="tweetBody">
				<div class="tweetProfileNameArea">
					<img src={props.pfp} class="tweetProfilePicture" />
					<a class="tweetUrl" href={url}><p class="tweetAuthor">{props.main_user}</p></a>
				</div>
				<div class="tweetTitleAudioArea">
					<h1 class="tweetTitle">{props.title}</h1>
					<audio class="tweetAudio" controls>
					<source src={props.audio} type="audio/mp3" />
					</audio>
				</div>
			</div>
		</>
	)
}

export default Tweet
