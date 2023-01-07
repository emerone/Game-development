import './style.css'
import shadowDog from './shadow_dog.png';

document.querySelector('#app').innerHTML = `
  <canvas></canvas>
`

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


function animate(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  ctx.fillRect(50,50,100,100)
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

  if (gameFramerate % staggerFrame == 0) {
    if (frameX < 5) frameX++
    else frameX = 0
  }

  gameFramerate++
  requestAnimationFrame(animate)
}
animate() 