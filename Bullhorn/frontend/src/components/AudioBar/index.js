// set up basic variables for app

// disable stop button while not recording


// visualiser setup - create web audio api context and canvas
import React, { useState, useRef } from "react";
import ConfirmationBox from "../ConfirmationBox";

export default function AudioBar() {
  const [stream, setStream] = useState({
    access: false,
    recorder: null,
    error: ""
  });

  const [recording, setRecording] = useState({
    active: false,
    available: false,
    url: ""
  });

  const chunks = useRef([]);
  const audioBlob = chunks.current[0]// , { 'type' : 'audio/ogg; codecs=opus' 
  console.log(chunks.current[0]) 
  
  

  function getAccess() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((mic) => {
        let mediaRecorder;

        try {
          mediaRecorder = new MediaRecorder(mic, {
            mimeType: "audio/webm"
          });
        } catch (err) {
          console.log(err);
        }

        const track = mediaRecorder.stream.getTracks()[0];
        track.onended = () => console.log("ended");

        mediaRecorder.onstart = function () {
          setRecording({
            active: true,
            available: false,
            url: ""
          });
        };

        mediaRecorder.ondataavailable = function (e) {
          console.log("data available");
          chunks.current.push(e.data);
          
        };

        mediaRecorder.onstop = async function () {
          console.log("stopped");
            const test = await chunks.current[0].arrayBuffer()
            console.log("This is chunks "+  test)
            console.log('This is audio Blob '+ audioBlob)
            const formData = new FormData();
            formData.append('audio', test)
            console.log(formData)
            
          const url = URL.createObjectURL(chunks.current[0]);
          chunks.current = [];

          setRecording({
            active: false,
            available: true,
            url
          });
        };

        setStream({
          ...stream,
          access: true,
          recorder: mediaRecorder
        });
      })
      .catch((error) => {
        console.log(error);
        setStream({ ...stream, error });
      });
  }

  return (
      <>
    <div className="AudioBar">
      {stream.access ? (
        <div className="audio-container">
          <button
            className={recording.active ? "active" : null}
            onClick={() => !recording.active && stream.recorder.start()}
          >
            Start Recording
          </button>
          <button onClick={() => stream.recorder.stop()}>Stop Recording</button>
          {recording.available && <ConfirmationBox  audioURL={recording.url} /> }
        </div>
      ) : (
        <button onClick={getAccess}>Get Mic Access</button>
      )}
    </div>
    
    
    </>

  );
}
