import './assets/css/stylesPrincipal.css';

import {randNome} from "./modules/index"


const img1 = document.querySelector('.imgFilme1')
const img2 = document.querySelector('.imgFilme2')
const img3 = document.querySelector('.imgFilme3')
const img4 = document.querySelector('.imgFilme4')
const img5 = document.querySelector('.imgFilme5')
const img6 = document.querySelector('.imgFilme6')










img1.setAttribute("src", randNome())
img2.setAttribute("src", randNome())
img3.setAttribute("src", randNome())
img4.setAttribute("src", randNome())
img5.setAttribute("src", randNome())
img6.setAttribute("src", randNome())




setInterval ( () => {
    img1.setAttribute("src", randNome())
    img2.setAttribute("src", randNome())
    img3.setAttribute("src", randNome())
    img4.setAttribute("src", randNome())
    img5.setAttribute("src", randNome())
    img6.setAttribute("src", randNome())
    
},5000)




















