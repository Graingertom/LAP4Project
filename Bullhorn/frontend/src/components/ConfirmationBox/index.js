import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function ConfirmationBox({ audioBlob, audioURL}) {
    const mainUser = JSON.parse(document.getElementById('user_id').textContent)
    const [input,updateInput] = useState()
    const [array, updateArray] = useState()
    function UpdateInput (e){
        const currentInput = e.target.value
        updateInput(currentInput) 
    }
    const blop = async () => {updateArray(await audioBlob.arrayBuffer())}

    useEffect(() => {
        blop();
      }, []);
    
    const assembleBlop = new Blob([array], { 'type' : 'audio/ogg; codecs=opus' })
    // console.log(audioBlob)
    // // console.log(array)
    // console.log(assembleBlop)
    // console.log(audioURL)

    const removePost = (e) => {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
    }
    const sendpost = async () => {

        try{
            const formData = new FormData()
            formData.append("main_user", mainUser)
            formData.append("title", input)
            formData.append("audio", audioBlob)
            console.log(mainUser)
            console.log(input)
            console.log(array)
            console.log(formData)
            //const body = {
            //     'main_user': mainUser,
            //     'title': input,
            //     'audio': array
            //   }
            
            const resp = await axios.post('http://localhost:8000/api/post/',formData)
            const data = resp.data
            console.log(data)
            if(data.err){
                throw Error(data.err)
            }
        }catch(err){
            console.warn(err)
        }
  
    //   fetch('http://localhost:8000/api/post/', options)
    //       .then(r => r.json())
    //       .catch(console.warn)
    }
    return(
        <section class="confirmation">
            <article class="clip">
            <form >
                <input onChange={UpdateInput} placeholder="Please enter clip name"/>
            </form>
                <h1 class="LastCheck">Any last minute changes</h1>
                <audio controls src={audioURL}></audio>
                <p>{input}</p>
                <button onClick={removePost} className="delete">Delete</button>
                <button onClick={sendpost} className="Keep">Keep</button>
            </article>
        </section>
    )
}

export default ConfirmationBox
