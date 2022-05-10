import React from "react";

function Create (){

    const mainUser = JSON.parse(document.getElementById('user_id').textContent)
    const handleSubmit = e => {
        e.preventDefault();
        const img = e.target.form[1].value
        console.log(img)
    }

    return(
        <div className="create">
        <h1>This is the Create Page</h1>
        <form id='form'>
            <input id='mainUser' type='text' style={{display: 'none'}} defaultValue={mainUser}/>
            <label htmlFor="profileImg">Add a profile image</label>
            <input id='profileImg' type='file' accept='.jpg, .jpeg, .png'/>
            <label htmlFor="description">Add a description</label>
            <input id='description' type='text'/>
            <input type='submit' onClick={handleSubmit}/>
        </form>
        </div>
    )
}

export default Create;
