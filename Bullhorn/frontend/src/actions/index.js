import axios from 'axios'

export const getUsers = async (username) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/?username=${username}`)
        const data = response.data
        console.log(data)
        return data
    } catch (err) {
        console.warn(err)
    }
}
