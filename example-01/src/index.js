if(module.hot){
	module.hot.accept()
}

import './estilo.styl'
import Please from 'pleasejs'

const div = document.getElementById('color')
const button = document.getElementById('button')

const changeColor = () => {
	div.style.background = Please.make_color()
}

button.addEventListener('click', changeColor)
