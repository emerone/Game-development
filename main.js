import './style.css'

document.querySelector('#app').innerHTML = `
  <canvas></canvas>
`
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width
const canvasHeight = canvas.height

const playerImage = new Image()
playerImage = 'shadow_dog.png'
