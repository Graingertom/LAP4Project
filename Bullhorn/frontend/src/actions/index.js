import axios from 'axios'

export const getUsers = async (username) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/?main_user=${username}`)
        const data = response.data
        return data
    } catch (err) {
        console.warn(err)
    }
}

export const postProfile = async (e) => {
    try {
        const userData = {
            main_user: e.target.form.mainUser.value,
            display_name: e.target.form.displayName.value,
            profile_img: e.target.form[1].files[0],
            discription: e.target.form.description.value
        }

        const response = await axios.post(`http://127.0.0.1:8000/api/profile`, userData)
        const data = response.data
        console.log(data)
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    }
}
