const verMapa = document.querySelector (`#ver-mapa`);
const map = document.querySelector (`#mapa`);
const nose = document.querySelector (`#nose`);
const moverUp = document.querySelector (`#moveUp`);
const moverLeft = document.querySelector (`#moveLeft`);
const moverDown = document.querySelector (`#moveDown`);
const moverRight = document.querySelector (`#moveRight`);

moverUp.addEventListener (`click`, moveUo);
moverLeft.addEventListener (`click`, moveLeft);
moverDown.addEventListener (`click`, moveDown);
moverRight.addEventListener (`click`, moveRight);

let lienzo = map.getContext(`2d`);

function pintarPersonaje () {
    lienzo.clearRect(0, 0 , map.width, map.height);
    lienzo.drawImage(dragon1.mapfoto,dragon1.x,dragon1.y,dragon1.ancho,dragon1.alto);
};

//lienzo.fillRect (5,15,20,40);  (x, y, alto, ancho)

function moveUo () {
    dragon1.y = dragon1.y - 5;
    pintarPersonaje();
};

function moveLeft () {
    dragon1.x = dragon1.x - 5;
    pintarPersonaje();
};

function moveDown () {
    dragon1.y = dragon1.y + 5;
    pintarPersonaje();
};

function moveRight () {
    dragon1.x = dragon1.x + 5;
    pintarPersonaje();
};


class Dragons{
    constructor(name, image, element, health, atk, def, debFire, debWater, debEarth, id) {
        this.name = name
        this.image = image
        this.element = element
        this.health = health
        this.atk = atk
        this.def = def
        this.debFire = debFire
        this.debWater = debWater
        this.debEarth = debEarth
        this.id = id
        this.x = 20
        this.y = 10
        this.alto = 100
        this.ancho = 100
        this.mapfoto = new Image()
        this.mapfoto.src = image
    }   
};

let dragon1 = new Dragons(`Dragón N°1`, `https://i.imgur.com/GDYqWIE.png`,`Agua`, 1010, 65,16,35,-15,`Indistinto`, `mascota-1`);
let dragon2 = new Dragons(`Dragón N°2`, `https://i.imgur.com/2pcscRc.png`,`Fuego`, 1020, 70,15,-15,`Indistinto`,35, `mascota-2`);
let dragon3 = new Dragons(`Dragón N°3`, `https://i.imgur.com/vokks6I.png`,`Tierra`, 1030, 75,14,`Indistinto`,35,-15, `mascota-3`);
let dragon4 = new Dragons(`Dragón N°4`, `https://i.imgur.com/lzIglf5.png`,`Viento (Agua)`, 1040, 80,13,35-15,-15,35, `mascota-4`);
let dragon5 = new Dragons(`Dragón N°5`, `https://i.imgur.com/5PH2mR0.png`,`Lodo (Tierra)`, 1050, 85,12,35,35-15,-15, `mascota-5`);
let dragon6 = new Dragons(`Dragón N°6`, `https://i.imgur.com/nSXxdj8.png`,`Lava (Fuego)`, 1060, 90,11,-15,35,35-15, `mascota-6`);

dragon2.mapfoto.setAttribute (`style`, `width: 300px; height: 300px;`);
nose.appendChild(dragon2.mapfoto);