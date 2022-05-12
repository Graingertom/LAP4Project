import { AudioBar, Tweet } from "../../components";
import React, {useState, useEffect} from "react";
import axios from 'axios';

function Home() {
    const [profileArray, setProfileArray] = useState();
    const [tweetArray, setTweetArray] = useState();
    const [processingArray, setProcessingArray] = useState();
    const [TweetList, setTweetList] = useState();

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
            <AudioBar/>
            {TweetList}
        </div>
        </>
    )

    async function getProfilePicture(username) {
        //deep copy
        let arr = JSON.parse(JSON.stringify(profileArray));
        const temp = await axios.get(`${window.location.protocol}//${window.location.host}/api/profile/?main_user=${tweet.main_user}`);
        let newData = await temp.data;
    }

    async function addProfilePictures() {
        if (!tweetArray) {
            return;
        }
        //deep copy
        let localTweets = JSON.parse(JSON.stringify(tweetArray));
        console.log(localTweets)
        for (let tweet in localTweets) {
            if (!tweet.main_user) continue;
            const temp = await axios.get(`${window.location.protocol}//${window.location.host}/api/profile/?main_user=${tweet.main_user}`);
            let newData = await temp.data;
            console.log(newData)
            tweet.pfp = newData.profile_img;
        }
        setProcessingArray(localTweets);
        //console.log(localTweets)
    }

    async function renderAllTweets() {
        if (!processingArray) {
            return;
        }
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
