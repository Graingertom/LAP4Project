import React from "react";
import { useNavigate } from "react-router-dom";
import { postProfile, postFriendList } from "../../actions";
import { BackButton } from "../../components";

function Create (){

    const goTo = useNavigate();
    const mainUser = JSON.parse(document.getElementById('user_id').textContent)
    const handleSubmit = e => {
        e.preventDefault();
        postFriendList(e)
        postProfile(e);
        goTo(`/profile/${e.target.form.mainUser.value}`)
    }

    return(
        <div className="create">
        <h1>This is the Create Page</h1>
        <form id='form'>
            <input id='mainUser' type='text' style={{display: 'none'}} defaultValue={mainUser}/>
            <label htmlFor="profileImg">Add a profile image</label>
            <input id='profileImg' type='file' accept='.jpg, .jpeg, .png'/>
            <label htmlFor="displayName">Add a display name</label>
            <input id='displayName' type='text'/>
            <label htmlFor="description">Add a description</label>
            <input id='description' type='text'/>
            <input type='submit' onClick={handleSubmit}/>
        </form>
        <BackButton />
        </div>
    )
}

export default Create;
