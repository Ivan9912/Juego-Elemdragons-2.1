const verMapa = document.querySelector (`#ver-mapa`);
const map = document.querySelector (`#mapa`);
const nose = document.querySelector (`#nose`);
const DragonMove = document.querySelector (`#btn-move`);

DragonMove.addEventListener (`click`, moveDg);

let lienzo = map.getContext(`2d`);

let imagenDragon1 = new Image();
imagenDragon1.src = "https://i.imgur.com/GDYqWIE.png";

imagenDragon1.setAttribute (`style`, `width: 100px; height: 100px;`);

lienzo.drawImage(imagenDragon1,20,40,100,100);

nose.appendChild(imagenDragon1);
//lienzo.fillRect (5,15,20,40);  (x, y, alto, ancho)

function moveDg () {
alert (`HOLAAA`)
};