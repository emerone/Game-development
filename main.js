import './style.css'
import shadowDog from './shadow_dog.png';

document.querySelector('#app').innerHTML = `
  <div class="select-container">
    <label for="select">Select animation </label>
    <select name="select" id="select">
      <option value="idle">Idle</option>
      <option value="jump">Jump</option>
      <option value="fall">fall</option>
      <option value="run">Run</option>
      <option value="dizzy">Dizzy</option>
      <option value="sit">Sit</option>
      <option value="roll">Roll</option>
      <option value="bite">Bite</option>
      <option value="ko">K.O</option>
      <option value="gethit">Get Hit</option>
    </select>
  </div>
  <canvas></canvas>
`
/**
 * Variables 
 */ 

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width = 600
const canvasHeight = canvas.height = 600

const playerImage = new Image()
playerImage.src = shadowDog
const spriteWidth = 575
const spriteHeight = 523

let frameX = 0
let frameY = 0
let gameFramerate = 0
const staggerFrame = 10

const animationStates = [
  {
    name: "idle",
    maxFrame: 5,
  },
  {
    name: "jump",
    maxFrame: 5,
  },
  {
    name: "fall",
    maxFrame: 5,
  },
  {
    name: "run",
    maxFrame: 7,
  },
  {
    name: "dizzy",
    maxFrame: 7,
  },
  {
    name: "sit",
    maxFrame: 7,
  },
  {
    name: "roll",
    maxFrame: 7,
  },
  {
    name: "bite",
    maxFrame: 7,
  },
  {
    name: "ko",
    maxFrame: 7,
  },
  {
    name: "gethit",
    maxFrame: 7,
  }
]

setInterval(() => {
  if (frameY == 0) {
    if (frameX < 5) frameX++
    else frameX = 0
  }
  if (frameY == 1) {
    if (frameX < 5) frameX++
    else frameX = 0
  }
  if (frameY == 2) {
    if (frameX < 5) frameX++
    else frameX = 0
  }
  if (frameY == 3) {
    if (frameX < 7) frameX++
    else frameX = 0
  }
  if (frameY == 4) {
    if (frameX < 9) frameX++
    else frameX = 0
  }
  if (frameY == 5) {
    if (frameX < 3) frameX++
    else frameX = 0
  }
  if (frameY == 6) {
    if (frameX < 5) frameX++
    else frameX = 0
  }
  if (frameY == 7) {
    if (frameX < 5) frameX++
    else frameX = 0
  }
  if (frameY == 8) {
    if (frameX < 11) frameX++
    else frameX = 0
  }
  if (frameY == 9) {
    if (frameX < 3) frameX++
    else frameX = 0
  }
}, 125)

/**
 * Functions
 */ 


function animate(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  ctx.drawImage(
  playerImage,
  frameX * spriteWidth,
  frameY * spriteHeight,
  spriteWidth,
  spriteHeight,
  0,
  0,
  spriteWidth,
  spriteHeight
  )

  requestAnimationFrame(animate)
}
animate() 


/**
 * Events 
 */ 

const selectInput = document.querySelector('select')

selectInput.onchange = (e) => {
  const value = selectInput.value

  for (let i = 0; i < animationStates.length; i++) {
    const state = animationStates[i];
    if (value == state.name) {
      frameY = i
    }
  }
  
  // animationStates.forEach((state, index, value) => {
  //   if (selectInput.value = state.name) {
  //     frameY = index
  //   }
  // });
}