import axios from 'axios'

export const getUsers = async () => {
    const username = JSON.parse(document.getElementById('user_id').textContent);
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/?username=${username}`)
        const data = response.data
        return data
    } catch (err) {
        console.warn(err)
    }
}
