import { AudioBar } from "../../components";
import React, {useState, useEffect} from "react";
import Tweet from "../../components/Tweet"
import axios from 'axios';

function Home() {
    const [tweetArray, setTweetArray] = useState([]);
    const [TweetList, setTweetList] = useState([]);

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
        let arr = tweetArray.map(tweet => <Tweet main_user={tweet.main_user} title={tweet.title} audio={tweet.audio} pfp={tweet.pfp} />);
        setTweetList(arr);
    }

    async function getAllTweets() {
        //waiting for implementation
        const localTweetsRaw = await axios.get(`${window.location.protocol}//${window.location.host}/api/post`);
        const localTweets = await localTweetsRaw.data;
        // const localTweets = [
        //     {main_user: "andrew", title: "sup", audio: "http://starmen.net/mother2/music/093-%20Earthbound%20-%20Super%20Dry%20Dance.mp3", pfp: "https://static01.nyt.com/images/2019/12/17/multimedia/17-parenting-LOL1/merlin_165750795_642b4b50-77fd-4ba8-8a78-1ba763e3cd7a-superJumbo.jpg"},
        //     {main_user: "tom", title: "scary music", audio: "http://starmen.net/mother2/music/088-%20Earthbound%20-%20Belch_s%20Factory.mp3", pfp: "https://www.economist.com/img/b/2048/1152/90/1843magazine.com/sites/default/files/styles/il_manual_crop_16_9/public/0212ILIN01-web.jpg"},
        //     {main_user: "gary", title: "ooo music", audio: "http://starmen.net/mother2/music/088-%20Earthbound%20-%20Belch_s%20Factory.mp3", pfp: "https://www.economist.com/img/b/2048/1152/90/1843magazine.com/sites/default/files/styles/il_manual_crop_16_9/public/0212ILIN01-web.jpg"}
        // ]
        setTweetArray(localTweets);
        console.log(localTweets)
    }
}


export default Home;
