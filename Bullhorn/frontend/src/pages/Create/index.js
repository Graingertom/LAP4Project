import React from "react";
import { useNavigate } from "react-router-dom";
import { postProfile, postFriendList } from "../../actions";

function Create (){

    const goTo = useNavigate();
    const mainUser = JSON.parse(document.getElementById('user_id').textContent)
    const handleSubmit = e => {
        e.preventDefault();
        postFriendList(e);
        postProfile(e);
        goTo(`/profile/${e.target.form.mainUser.value}`)
    }

    return(
        <div className="create">
        <h1>Create your user!</h1>
        <form id='form'>
            <input id='mainUser' type='text' style={{display: 'none'}} defaultValue={mainUser}/>
            <label htmlFor="profileImg">Add a profile image</label><br />
            <input id='profileImg' type='file' accept='.jpg, .jpeg, .png'/><br />
            <label htmlFor="displayName">Add a display name</label><br />
            <input id='displayName' type='text'/><br />
            <label htmlFor="description">Add a description</label><br />
            <input id='description' type='text'/><br />
            <input type='submit' onClick={handleSubmit}/><br />
        </form>
        </div>
    )
}

export default Create;
