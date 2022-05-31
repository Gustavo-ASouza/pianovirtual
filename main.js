//get all keys
const keys = document.querySelectorAll('.key')


function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);
  // pype or pressed key
const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

console.log(key)

  // if key exist

  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }
  addPlayingClass(key)

  playAudio(audioKeyCode)
 
}

function addPlayingClass(key){
  key.classList.add('playing')
}

function playAudio(audioKeyCode){
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
 audio.currentTime = 0
 audio.play()

}

function getKeyCode(event){
  let keyCode
  
  const isKeyboard = event.type ==="keydown"
  if(isKeyboard){
    keyCode = event.keyCode
  }else{
    keyCode = event.target.dataset.key
  }
  return keyCode
}

function removePlayingClass(event){
  event.target.classList.remove("playing")
}

function registerEvents(){
  // click with mouse
keys.forEach(function (key) {
  key.addEventListener('click', playNote)
  key.addEventListener('transitionend', removePlayingClass)
})

//keyboard type
window.addEventListener('keydown', playNote)

}
window.addEventListener("load",registerEvents)
