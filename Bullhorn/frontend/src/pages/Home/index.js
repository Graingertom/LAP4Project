import React, {useState, useEffect} from "react";
import Tweet from "../../components/Tweet"
import axios from 'axios';

function Home() {

    const [tweetList, setTweetList] = useState([]);

    useEffect(() => {
        getAllTweets();
    }, []);

    return(
        <div className="home">
        <Tweet />
        </div>
    )

    async function getAllTweets() {
        const localTweetsRaw = await axios.get(`${window.location.protocol}//${window.location.host}/api/post`);
        const localTweets = await localTweetsRaw.data;
        setTweetList(localTweets);
        console.log(localTweets);
    }
}


export default Home;
