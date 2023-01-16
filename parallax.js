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
let gameSpeed = 1

const p = document.querySelector("p")
const input = document.querySelector("input")



class Layer {
  constructor(image, speedModifier) {
    this.image = image,
    this.x = 0,
    this.y = 0,
    this.width = 2400,
    this.height = 700,
    this.x2 = 2400,
    this.speedModifier = speedModifier
  }
  update() {
    setInterval(() => {
      this.x -= 2 * this.speedModifier * gameSpeed
      this.x2 -= 2 * this.speedModifier * gameSpeed

      if (this.x < -2400) this.x = 0
      if (this.x2 < 0) this.x2 = 2400
    }, 5)
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
  }
}

const backgroundLayer1 = new Image()
backgroundLayer1.src = "layer-1.png"
const backgroundLayer2 = new Image()
backgroundLayer2.src = "layer-2.png"
const backgroundLayer3 = new Image()
backgroundLayer3.src = "layer-3.png"
const backgroundLayer4 = new Image()
backgroundLayer4.src = "layer-4.png"
const backgroundLayer5 = new Image()
backgroundLayer5.src = "layer-5.png"

const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.4)
const layer3 = new Layer(backgroundLayer3, 0.6)
const layer4 = new Layer(backgroundLayer4, 0.8)
const layer5 = new Layer(backgroundLayer5, 1)

const gameObject = [layer1, layer2, layer3, layer4, layer5]

/**
 * Functions
 */ 

  gameObject.forEach(object => {
    object.update()
  });

function animate(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  gameObject.forEach(object => {
    object.draw()
  });
  
  requestAnimationFrame(animate)
}
animate() 

const showValue = (value) => {
  p.innerText = `Game speed : ${value}`
  gameSpeed = value
  input.value = value * 4
}
showValue(1)


/**
 * Events 
 */ 


input.onchange = e => {
  const value = input.value / 4
  showValue(value)
}

