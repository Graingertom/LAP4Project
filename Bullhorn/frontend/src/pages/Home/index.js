import { AudioBar } from "../../components";
import React, {useState, useEffect} from "react";
import Tweet from "../../components/Tweet"
import axios from 'axios';

function Home() {
    const [tweetArray, setTweetArray] = useState([]);
    const [processingArray, setProcessingArray] = useState([]);
    const [TweetList, setTweetList] = useState([]);

    useEffect(() => {
        getAllTweets();
    }, []);

    useEffect(() => {
        addProfilePictures();
    }, [tweetArray]);

    useEffect(() => {
        renderAllTweets();
    }, [processingArray]);

    return(
        <>
        <div className="home">
            {TweetList}
        </div>
        </>
    )

    async function addProfilePictures() {
        if (!tweetArray) {
            return;
        }
        //deep copy
        let localTweets = JSON.parse(JSON.stringify(tweetArray));
        console.log(localTweets)
        for (let tweet in localTweets) {
            const temp = await axios.get(`${window.location.protocol}//${window.location.host}/api/profile/?main_user=${tweet.main_user}`);
            const newData = await temp.data;
            tweet.main_user = newData.main_user;
        }
        setProcessingArray(localTweets);
        //console.log(localTweets)
    }

    async function renderAllTweets() {
        let arr = processingArray.map(tweet => <Tweet main_user={tweet.main_user} title={tweet.title} audio={tweet.audio} pfp={tweet.pfp} />);
        setTweetList(arr);
    }

    async function getAllTweets() {
        //waiting for implementation
        const localTweetsRaw = await axios.get(`${window.location.protocol}//${window.location.host}/api/post`);
        const localTweets = await localTweetsRaw.data;
        setTweetArray(localTweets);
    }
}


export default Home;
