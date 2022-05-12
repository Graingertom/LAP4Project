import axios from "axios";

import { getUsers, getFollowerInfo, postFollower, postFollowing, postFriendList, postProfile, editProfile, editProfileImage } from ".";

jest.mock('axios');

describe('getUsers', () => {
    it('successfully gets data from the API', async () => {
        const data = {id:6,main_user:"tom",display_name:"Tom",profile_img:"http://127.0.0.1:8000/media/images/1621437949970_FxQ4AnE.jpg",discription:"Hi I'm Tom."};

        axios.get.mockResolvedValueOnce(data);
        
        const username = "tom"

        await getUsers(username);

        expect(axios.get).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/profile/?main_user=${username}`);
    });
})

describe('getFollowerInfo', () => {
    it('successfully gets data from the API', async () => {
        const username = 'tom'
        const data = {id:1,main_user:"tom",friends:"",following:"test2,test3",followers:""};

        axios.get.mockResolvedValueOnce(data);

        await getFollowerInfo(username);

        expect(axios.get).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/friends/?main_user=${username}`);
    });
})

describe('postFollower', () => {
    it('successfully posts data to the API', async () => {
        const data = { followers: "Test1, Test2"};
        const userID = 3
        const toFollow = 'tom'

        axios.get.mockResolvedValueOnce(data);

        await postFollower(data);

        expect(axios.get).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/friends/?main_user=${toFollow}`);
    });
})

describe('postFriendList', () => {
    it('successfully posts to the API', async () => {
        const data = { main_user: 'Test'};

        axios.post.mockResolvedValueOnce(data);
        
        const result = await postFriendList(data);

        expect(axios.post).toHaveBeenCalledWith(`http://127.0.0.1:8000/api/friends/`); // , { "main_user": "Test"}
        expect(result).toEqual(data);
    })})

    


