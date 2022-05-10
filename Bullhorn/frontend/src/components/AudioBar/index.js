import  React  from  'react'

// set up basic variables for app

const record = document.querySelector('.record');
const stop = document.querySelector('.stop');
const soundClips = document.querySelector('.sound-clips');
const confirmationBox = document.querySelector('.confirmation')

const canvas = document.querySelector('.visualizer');
const mainSection = document.querySelector('.main-controls');

// disable stop button while not recording

stop.disabled = true;

// visualiser setup - create web audio api context and canvas

let audioCtx;
const canvasCtx = canvas.getContext("2d");

//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.');

  const constraints = { audio: true };
  let chunks = [];

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
        }
      }
    }

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  }

  let onError = function(err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
   console.log('getUserMedia not supported on your browser!');
}

function visualize(stream) {
  if(!audioCtx) {
    audioCtx = new AudioContext();
  }

  const source = audioCtx.createMediaStreamSource(stream);

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);
  //analyser.connect(audioCtx.destination);

  draw()

  function draw() {
    const WIDTH = canvas.width
    const HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

    canvasCtx.beginPath();

    let sliceWidth = WIDTH * 1.0 / bufferLength;
    let x = 0;


    for(let i = 0; i < bufferLength; i++) {

      let v = dataArray[i] / 128.0;
      let y = v * HEIGHT/2;

      if(i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();

  }
}

window.onresize = function() {
  canvas.width = mainSection.offsetWidth;
}

window.onresize();

function  AudioBar() {

return(

<>

<div  id="audiobar">

<section  class="main-controls">

<canvas  class="visualizer"  height="60px"></canvas>

<div  id="buttons">

<button  class="record">Record</button>

<button  class="stop">Stop</button>

</div>

</section>

<section  class="sound-clips">

</section>

</div>

</>

)

}

export  default  AudioBar