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
