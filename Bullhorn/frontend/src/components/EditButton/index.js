import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditButton = () => {

    const goTo = useNavigate();

    return(
    <>
        <button onClick={()=>{goTo('/edit')}}>Edit Your Profile</button>
    </>
    )
}

export default EditButton
