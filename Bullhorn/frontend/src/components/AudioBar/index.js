// set up basic variables for app

// disable stop button while not recording


// visualiser setup - create web audio api context and canvas
import React, { useState, useRef } from "react";

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
  const audioBlob = new Blob(chunks.current[0], { 'type' : 'audio/ogg; codecs=opus' })

  function getAccess() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((mic) => {
        let mediaRecorder;

<<<<<<< HEAD
        try {
          mediaRecorder = new MediaRecorder(mic, {
            mimeType: "audio/webm"
          });
        } catch (err) {
          console.log(err);
=======
  let onSuccess = function(stream) {
    const mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";

      stop.disabled = false;
      record.disabled = true;
    }

    stop.onclick = function() {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      record.style.background = "";
      record.style.color = "";
      // mediaRecorder.requestData();

      stop.disabled = true;
      record.disabled = false;
    }

    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stop() called.");

      // Upon successful creation create the clip post 
      const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');

      // Confirmation box 
      const ConTitle = document.createElement('h1');
      const ConContainer = document.createElement('article');
      const ConClipLabel = document.createElement('p');
      const ConAudio = document.createElement('audio');
      const Confirmationbutton = document.createElement('button')
      const ConDeleteButton = document.createElement('button');

      // Post Audio
      const clipContainer = document.createElement('article');
      clipContainer.style.display = 'none'
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');
      
      // Post config
      ConTitle.classList.add('LastCheck')
      ConTitle.textContent = 'Any last minute changes'
      ConContainer.classList.add('clip');
      ConAudio.setAttribute('controls', ''); // allows volume changing and downloading
      Confirmationbutton.textContent = 'Keep'
      Confirmationbutton.className = 'Keep'
      ConDeleteButton.textContent = 'Delete';
      ConDeleteButton.className = 'delete';


      clipContainer.classList.add('clip');
      audio.setAttribute('controls', ''); // allows volume changing and downloading
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';


      clipName === null ? clipLabel.textContent = 'My BullHorn clip': clipLabel.textContent = clipName;
      clipName === null ? ConClipLabel.textContent = 'My BullHorn clip': ConClipLabel.textContent = clipName;

      // if( clipName === null) {
      //   clipLabel.textContent = 'My BullHorn clip';
      //   ConClipLabel.textContent = 'My BullHorn clip';
      // } else {
      //   clipLabel.textContent = clipName;
      //   ConClipLabel.textContent = clipName
      // }

      // Confirmation box - confirm the post
      ConContainer.appendChild(ConTitle);
      ConContainer.appendChild(ConAudio);
      ConContainer.appendChild(ConClipLabel);
      ConContainer.appendChild(ConDeleteButton);
      ConContainer.appendChild(Confirmationbutton);
      console.log(ConContainer)
      confirmationBox.appendChild(ConContainer) // confirmation box
      
      // Feed - Confirmed posts
      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      console.log(clipContainer)
      soundClips.appendChild(clipContainer); // adding to the soundClips

      // if (!!confirmationBox){
      //   confirmationBox.parentNode.removeChild(clipContainer)
      //   soundClips.appendChild(clipContainer)
      // }

      // Audio clip creation 
      audio.controls = true;
      ConAudio.controls = true;
      const audioBlob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      ConAudio.src = audioURL;
      console.log("recorder stopped");

      // Delete created post on feed
      deleteButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
      Confirmationbutton.onclick = () => {
        ConContainer.remove()
        clipContainer.style.display = 'block'
        // const audioCode = audioURL.split('/')
        // console.log(audioCode[3])
        const options = { 
          method: 'POST',
          body: {
            'title': clipLabel,
            'audio': audioBlob
          },
          headers: { "Content-Type": "application/json" }
      };
      console.log(options)
  
      fetch('http://localhost:5000/api/post', options)
          .then(r => r.json())
          .catch(console.warn)
      }

      clipLabel.onclick = function() {
        const existingName = clipLabel.textContent;
        const newClipName = prompt('Enter a new name for your sound clip?');
        if(newClipName === null) {
          clipLabel.textContent = existingName;
        } else {
          clipLabel.textContent = newClipName;
>>>>>>> 2560154c6c75e5b0cf9a5f937aaaea06d296de14
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
          {recording.available && <audio controls src={recording.url} />}
        </div>
      ) : (
        <button onClick={getAccess}>Get Mic Access</button>
      )}
    </div>

  );
}
