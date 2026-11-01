//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

function stopSongs(){
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    if(song){
      song.pause();
      song.currentTime = 0;
    }
  });
}

// create audio elements
sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

// create buttons for sounds
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(btn);
});

// create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', () => {
  stopSongs();
});
buttonsContainer.appendChild(stopBtn);