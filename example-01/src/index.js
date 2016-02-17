if(module.hot){
	module.hot.accept()
}

require('./estilo.styl')
var Please = require('pleasejs')
var div = document.getElementById('color')
var button = document.getElementById('button')

function changeColor(){
	div.style.background = Please.make_color()
}

button.addEventListener('click', changeColor)
