import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProfileImage } from "../../actions";

function EditImage() {

    const [errorMessage, setErrorMessage] = useState();

    const goTo = useNavigate();
    const mainUser = JSON.parse(document.getElementById('user_id').textContent)
    const handleSubmit = e => {
        e.preventDefault();
        setErrorMessage('')
        editProfileImage(e);
        goTo(`/profile/${e.target.form.mainUser.value}`)
    }

    return (
        <div className="Edit">
            <h1>This is the Edit Image Page</h1>
            <form id='form'>
                {errorMessage && (
                    <p className="error"> {errorMessage} </p>
                )}
                <input id='mainUser' type='text' style={{ display: 'none' }} defaultValue={mainUser} />
                <label htmlFor="profileImg">Add a profile image</label>
                <input id='profileImg' type='file' accept='.jpg, .jpeg, .png' />
                <input type='submit' onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default EditImage;
