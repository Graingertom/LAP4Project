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
  const [blob, setBlob] = useState();
  
  const chunks = useRef([]);
  

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
          setBlob(chunks.current[0]);

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
      <div className="home AudioBar ">
        {stream.access ? (
          <div className="audio-container">
            <button className="startRecButton"
              onClick={() => !recording.active && stream.recorder.start()}>Start Recording</button>
            <button className="stopRecButton" onClick={() => stream.recorder.stop()}>Stop Recording</button>
              {recording.active ? <h1 className="recordingText">Recording!</h1> : null}
            {recording.available && <ConfirmationBox audioBlob={blob} audioURL={recording.url} />}
          </div>
        ) : (
          <div className="audio-container">
          <button onClick={getAccess}>Get Mic Access</button>
          </div>
        )}
      </div>
    </>
  );
}
