import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const getUsers = async (username) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/?main_user=${username}`)
        const data = response.data
        return data
    } catch (err) {
        console.warn(err)
    }
}

export const getFollowerInfo = async (username) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/friends/?main_user=${username}`)
        const data = response.data
        return data
    } catch (err) {
        console.warn(err)
    }
}

export const postProfile = async (e) => {
    try {
        const formData = new FormData();

        formData.append("main_user", e.target.form.mainUser.value);
        formData.append("display_name", e.target.form.displayName.value);
        formData.append("profile_img", e.target.form[1].files[0]);
        formData.append("discription", e.target.form.description.value);

        const response = await axios.post(`http://127.0.0.1:8000/api/profile/`, formData)
        const data = response.data
        console.log(data)
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    }
}

export const postFriendList = async (e) => {
    try {
        const formData = new FormData();

        formData.append("main_user", e.target.form.mainUser.value);

        const response = await axios.post(`https://vast-tundra-28650.herokuapp.com/api/friends/`, formData)
        const data = response.data
        console.log(data)
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    }
}

export const editProfile = async (e) => {
    try {
        const username = JSON.parse(document.getElementById('user_id').textContent)
        
        const user = await axios.get(`https://vast-tundra-28650.herokuapp.com/api/profile/?main_user=${username}`)
        const userData = user.data[0]
        const userID = user.data[0].id
        
        const response = await axios.patch(`https://vast-tundra-28650.herokuapp.com/api/profile/${userID}/`,
        {
            "main_user": e.target.form.mainUser.value,
            "display_name": e.target.form.displayName.value || userData.display_name,
            "discription": e.target.form.description.value || userData.discription
        }
        )
        const data = response.data
        console.log(data)
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    }
}

export const editProfileImage = async (e) => {
    try {
        const username = JSON.parse(document.getElementById('user_id').textContent)
        
        const user = await axios.get(`https://vast-tundra-28650.herokuapp.com/api/profile/?main_user=${username}`)
        const userID = user.data[0].id
        
        const response = await axios.patch(`https://vast-tundra-28650.herokuapp.com/api/profile/${userID}/`,
        {
            "main_user": e.target.form.mainUser.value,
            "profile_image" : e.target.form[1].files[0]
        }
        )
        const data = response.data
        console.log(data)
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    }
}

export const postFollowing = async (toFollow) => {
    try {
        const username = JSON.parse(document.getElementById('user_id').textContent)
        const user = await axios.get(`https://vast-tundra-28650.herokuapp.com/api/friends/?main_user=${username}`)
        const userID = user.data[0].id
        let friendList = user.data[0].following.split(',')
        friendList.push(toFollow)
        const followData = {
            "following": friendList.toString()
        }

        const response = await axios.patch(`https://vast-tundra-28650.herokuapp.com/api/friends/${userID}/`, followData)
        const data = response.data
        console.log(data.following.split(','))
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    }
}

export const postFollower = async (toFollow) => {
    try {
        const username = JSON.parse(document.getElementById('user_id').textContent)
        const user = await axios.get(`https://vast-tundra-28650.herokuapp.com/api/friends/?main_user=${toFollow}`)
        const userID = user.data[0].id
        let friendList = user.data[0].followers.split(',')
        friendList.push(username)
        const followData = {
            "followers": friendList.toString()
        }

        const response = await axios.patch(`https://vast-tundra-28650.herokuapp.com/api/friends/${userID}/`, followData)
        const data = response.data
        console.log(data.following.split(','))
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    }
}
