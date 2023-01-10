import "./parallax.css";
import "./style.css"

document.querySelector('#app').innerHTML = `
  <canvas></canvas>
`
/**
 * Variables 
 */ 

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const canvasWidth = canvas.width = 800
const canvasHeight = canvas.height = 700
const gameSpeed = 5

/**
 * Functions
 */ 

const layer1 = new Image()
layer1.src = "layer-1.png"
const layer2 = new Image()
layer2.src = "layer-2.png"
const layer3 = new Image()
layer3.src = "layer-3.png"
const layer4 = new Image()
layer4.src = "layer-4.png"
const layer5 = new Image()
layer5.src = "layer-5.png"



/**
 * Functions
 */ 




function animate(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  ctx.drawImage(layer1, 0, 0)
  ctx.drawImage(layer2, 0, 0)
  ctx.drawImage(layer3, 0, 0)
  ctx.drawImage(layer4, 0, 0)
  ctx.drawImage(layer5, 0, 0)
  
  requestAnimationFrame(animate)
}
animate() 


/**
 * Events 
 */ 

