import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../actions";
import { BackButton } from "../../components";

function Edit() {

    const [errorMessage, setErrorMessage] = useState();

    const goTo = useNavigate();
    const mainUser = JSON.parse(document.getElementById('user_id').textContent)
    const handleSubmit = e => {
        e.preventDefault();
        setErrorMessage('')
        editProfile(e);
        goTo(`/profile/${e.target.form.mainUser.value}`)
    }

    return (
        <div className="Edit">
            <h1>Edit your profile</h1>
            <form id='form'>
                {errorMessage && (
                    <p className="error"> {errorMessage} </p>
                )}
                <input id='mainUser' type='text' style={{ display: 'none' }} defaultValue={mainUser} />
                <label htmlFor="displayName">Change your display name</label><br />
                <input id='displayName' type='text' /><br />
                <label htmlFor="description">Change your description</label><br />
                <input id='description' type='text' /><br />
                <input type='submit' onClick={handleSubmit} /><br />
            </form>
            <BackButton />
        </div>
    )
}

export default Edit;
