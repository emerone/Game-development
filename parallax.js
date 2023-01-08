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


/**
 * Functions
 */ 


function animate(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  

  requestAnimationFrame(animate)
}
animate() 


/**
 * Events 
 */ 

