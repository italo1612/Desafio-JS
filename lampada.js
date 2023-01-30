const turnOn = document.querySelector('#turnOn')
const trunOff = document.querySelector('#turnOff')
const lampada = document.getElementById('lampada')
const trocarLamp = document.getElementById('trocarLamp')

function ligarLamp() {
  lampada.src = 'img/ligada.jpg'
}
function desligarLamp() {
  lampada.src = 'img/desligada.jpg'
}
function quebrarLampada() {
  lampada.src = 'img/quebrada.jpg'
  trocarLamp.classList.add('show')
  turnOn.classList.add('hide')
  trunOff.classList.add('hide')
}
function trocarLampada() {
  lampada.src = 'img/desligada.jpg'
  trocarLamp.classList.remove('show')

  turnOn.classList.remove('hide')
  trunOff.classList.remove('hide')
}

turnOn.addEventListener('click', ligarLamp)
trunOff.addEventListener('click', desligarLamp)
trocarLamp.addEventListener('click', trocarLampada)
lampada.addEventListener('dblclick', quebrarLampada)
