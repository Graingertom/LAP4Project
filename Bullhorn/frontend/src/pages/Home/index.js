import { AudioBar, Tweet } from "../../components";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { getUsers } from "../../actions";

function Home() {
    const [profileArray, setProfileArray] = useState();
    const [tweetArray, setTweetArray] = useState();
    const [TweetList, setTweetList] = useState();

    useEffect(() => {
        getAllTweets();
    }, []);

    useEffect(() => {
        renderAllTweets();
    }, [tweetArray]);

    return(
        <>
        <div className="home">
            {TweetList}
        </div>
        </>
    )

    async function renderAllTweets() {
        if (!tweetArray) {
            return;
        }
        let arr = tweetArray.map(tweet => <Tweet main_user={tweet.main_user} title={tweet.title} audio={tweet.audio} pfp={tweet.pfp} />);
        setTweetList(arr);
    }

    async function getAllTweets() {
        const localTweetsRaw = await axios.get(`${window.location.protocol}//${window.location.host}/api/post`);
        const localTweets = await localTweetsRaw.data;

        for (let tweet of localTweets) {
            let userData = await axios.get(`${window.location.protocol}//${window.location.host}/api/profile/?main_user=${tweet.main_user}`);
            userData = await userData.data;
            tweet.pfp = userData[0].profile_img;
        }

        setTweetArray(localTweets);
    }
}


export default Home;
