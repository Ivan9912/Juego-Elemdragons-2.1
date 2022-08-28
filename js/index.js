//import {dragonsElection} from './dragons.js';

function init () {
    
    dragonsElection.forEach ((dragon2) => {
        max++;
        optionsDragons = `<input type = "radio" style ="display: none" name = "mascota" id = "${dragon2.id}" />
        <label for = "${dragon2.id}">
            <img src="${dragon2.image}" alt="${dragon2.name}" title = "${dragon2.name} ${dragon2.element}">
        </label>`;
        spanContenedorDeDragones.innerHTML += optionsDragons;
        
        if (max == 6) {
            const escuchaOpcionesRadio = document.forms[`seleccionar-mascota`].elements[`mascota`];
            for(let i = 0, max = escuchaOpcionesRadio.length; i < max; i++) {
                escuchaOpcionesRadio[i].onclick = function() {
                    const spanInputsSelect = document.querySelector (`#btn-requisito-seleccion`); 
                    if (seleccion == 0) {
                        spanInputsSelect.innerHTML = `
                        <button type = "button" id = "seleccionar-mascota-player" onclick = seleccionarMascotaPlayer() class = "section-btn-select2">
                            Select
                        </button> 
                        <button type = "button" id = "seleccionar-mascota-player-random" disabled class = "section-btn-random2">
                            Random
                        </button>`;
                    };
                    if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[0]) {
                        alert (dragonsList[0]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[1]) {
                        alert (dragonsList[1]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[2]) {
                        alert (dragonsList[2]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[3]) {
                        alert (dragonsList[3]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[4]) {
                        alert (dragonsList[4]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[5]) {
                        alert (dragonsList[5]);
                    };
                    seleccion++; 
                };
            };
        };
    });
};

function seleccionarMascotaPlayer () {
    hoverBotonSelect.addEventListener (`mouseover`, () => hoverBotonSelect.setAttribute (`style`, `background-color: black; color: bisque;`));
    hoverBotonSelect.addEventListener (`mouseout`, () => hoverBotonSelect.setAttribute (`style`, `background-color: transparent; color: black;`));
    const input1 = document.querySelector (`#mascota-1`);
    const input2 = document.querySelector (`#mascota-2`);
    const input3 = document.querySelector (`#mascota-3`);
    const input4 = document.querySelector (`#mascota-4`);
    const input5 = document.querySelector (`#mascota-5`);
    const input6 = document.querySelector (`#mascota-6`);
    if (input1.checked) {
        registroDeElecciones (1);
    } else if (input2.checked){
        registroDeElecciones (2);
    } else if (input3.checked){
        registroDeElecciones (3);
    } else if (input4.checked){
        registroDeElecciones (4);
    } else if (input5.checked){
        registroDeElecciones (5);
    } else if (input6.checked){
        registroDeElecciones (6);
    };
    seleccionarMascotaPc();
    spanVidaPlayer.innerHTML = vidaPlayer;
    sectionMain2.style.display=`none`;
};

function seleccionarMascotaPlayerRandom () {
    let randomMascotaPlayer = random (min, max);
    spanMenuMascotas.innerHTML = `<p class = "conteiner-random-mensaje">Seleccionaste el botón <b>"random"</b> por ende, no podrás volver a seleccionar sin <b>reiniciar</b> el juego.</p>`;
    if (randomMascotaPlayer == 1) {
        registroDeElecciones (1);  
        } else if (randomMascotaPlayer == 2) {
            registroDeElecciones (2);
        } else if (randomMascotaPlayer == 3) {
            registroDeElecciones (3);
        } else if (randomMascotaPlayer == 4) {
            registroDeElecciones (4);
        } else if (randomMascotaPlayer == 5) {
            registroDeElecciones (5);
        } else if (randomMascotaPlayer == 6) {
            registroDeElecciones (6);
        };
    seleccionarMascotaPc();
    spanVidaPlayer.innerHTML = vidaPlayer;
    seleccion++;
};

function seleccionarMascotaPc () {
    let randomMascotaPc = random (min, max);
    if (randomMascotaPc == 1) {
        registroDeEleccionesPc(1);
        } else if (randomMascotaPc == 2) {
            registroDeEleccionesPc(2);
        } else if (randomMascotaPc == 3) {
            registroDeEleccionesPc(3);
        } else if (randomMascotaPc == 4) {
            registroDeEleccionesPc(4);
        } else if (randomMascotaPc == 5) {
            registroDeEleccionesPc(5);
        } else if (randomMascotaPc == 6) {
            registroDeEleccionesPc(6);
    };
    spanVidaPc.innerHTML = vidaPc;
};

function registroDeElecciones (mascota) {
    mascotaElegidaPorPlayer.unshift (dragonsElection[mascota-1].name);
    spanMascotaPlayer.innerHTML = mascotaElegidaPorPlayer[0];
    ataqueDelPlayerALaPc = registroDeAtaque[mascota-1];
    vidaPlayer = registroDeVida[mascota-1];
    validarBtnAtaque (mascota);
    ataqueElegidoPorPlayerMascota = registroDeAtaque[mascota-1];
    defElegidoPorPlayer = registroDeDefensa[mascota-1];
    debDeFuegoMascotaElegidaPlayer = registroDeDebFire[mascota-1];
    debDeAguaMascotaElegidaPlayer = registroDeDebWater[mascota-1];
    debDeTierraMascotaElegidaPlayer = registroDeDebEarth[mascota-1];
};

function registroDeEleccionesPc (DragonPc) {
    mascotaElegidaPorPc.unshift (dragonsElection[DragonPc-1].name); 
    spanMascotarandomPc.innerHTML = mascotaElegidaPorPc[0];
    ataqueDeLaPcAlPlayer = registroDeAtaque[DragonPc-1];
    vidaPc = registroDeVida[DragonPc-1];
    eleccionPc = DragonPc;
    ataqueElegidoPorPcMascota = registroDeAtaque[DragonPc-1];
    defElegidoPorPc = registroDeDefensa[DragonPc-1];
    debDeFuegoMascotaElegidaPC = registroDeDebFire[DragonPc-1];
    debDeAguaMascotaElegidaPC = registroDeDebWater[DragonPc-1];
    debDeTierraMascotaElegidaPC = registroDeDebEarth[DragonPc-1];
};

function validarBtnAtaque (codigoMascota) {
    if (codigoMascota == 1) {
        botonFuego.style.display = `none`;
        botonTierra.style.display = `none`;
        botonAgua.style.display = `flex`;
        escuchaBotonAgua = botonAgua;
    } else if (codigoMascota == 2) {
        botonTierra.style.display = `none`;
        botonAgua.style.display = `none`;
        botonFuego.style.display = `flex`;
        escuchaBotonTierra = botonTierra;
    } else if (codigoMascota == 3) {
        botonAgua.style.display = `none`;
        botonFuego.style.display = `none`;
        botonTierra.style.display = `flex`;
        escuchaBotonDeFuego = botonFuego;
    } else if (codigoMascota == 4) {
        botonTierra.style.display = `none`;
        botonFuego.style.display = `flex`;
        botonAgua.style.display = `flex`;
        escuchaBotonDeFuego = botonFuego;
        escuchaBotonAgua = botonAgua;
    } else if (codigoMascota == 5) {
        botonFuego.style.display = `none`;
        botonAgua.style.display = `flex`;
        botonTierra.style.display = `flex`;
        escuchaBotonTierra = botonTierra;
        escuchaBotonAgua = botonAgua;
    } else if (codigoMascota == 6) {
        botonAgua.style.display = `none`;
        botonFuego.style.display = `flex`;
        botonTierra.style.display = `flex`;
        escuchaBotonDeFuego = botonFuego;
        escuchaBotonTierra = botonTierra;
    };
    sectionAtaque.style.display=`flex`;
    sectionMain.style.display=`none`;
};

function elementoFuego () {
    ataqueElementoPlayer = `Fuego 🔥`;
    spanElementosPlayer.innerHTML = `Elemento de ${ataqueElementoPlayer}`;
    ataqueDeLaPc ();
};

function elementoAgua () {
    ataqueElementoPlayer = `Agua 💧`;
    spanElementosPlayer.innerHTML = `Elemento de ${ataqueElementoPlayer}`;
    ataqueDeLaPc ();    
};

function elementoTierra () {
    ataqueElementoPlayer = `Tierra ☘`;
    spanElementosPlayer.innerHTML = `Elemento de ${ataqueElementoPlayer}`;
    ataqueDeLaPc ();
};

function ataqueDeLaPc () {
    let ataquerandom = random (min, (max-4));
    ataqueDelPlayerALaPc = ataquerandomoo(ataqueElegidoPorPlayerMascota);
    ataqueDeLaPcAlPlayer = ataquerandomoo(ataqueElegidoPorPcMascota);
    if (eleccionPc == 1) {
        ataqueElementoDeLaPc = `Agua 💧`;
    } else if (eleccionPc == 2) {
        ataqueElementoDeLaPc = `Fuego 🔥`;
    } else if (eleccionPc == 3) {
        ataqueElementoDeLaPc = `Tierra ☘`;
    } else if (eleccionPc == 4) {
        if (ataquerandom == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        };
    } else if (eleccionPc == 5) {
        if (ataquerandom == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        };
    } else if (eleccionPc == 6) {
        if (ataquerandom == 1) {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        };
    };
    spanElementosDeLaPc.innerHTML = `Elemento de ${ataqueElementoDeLaPc}`;
    combateDeElementos();
};

function botonDeReinicio () {
    location.reload(); 
};

function random (minimo, maximo) {
    return Math.floor (Math.random() * (maximo - minimo + 1) + minimo);
};

function ataquerandomoo (ataque) {
    let aletoidad = random (ataque, (ataque * 1.65)); 
    return aletoidad
};

//----------------------------
function seleccionarMascotaPcTrampa () {
    seleccionarMascotaPc();
    alert (`
    Este botón se desarrolló para probar las posibles variables de 
    ataques. 
    
    Éste es tú valor que se cambiará:  ${mascotaElegidaPorPc[0]}`);
};

function trampa () {
    if (i % 2 || i == 1) {
        let trampa = document.querySelector (`#trampa`);
        trampa.innerHTML = `
        <div> 
            <button id = "boton-pc" class = "boton-trampa">
                Elegir por la pc.
            </button>
        </div>`;
        let botonDeTrampa2 = document.querySelector (`#boton-pc`);
        botonDeTrampa2.addEventListener (`click`, seleccionarMascotaPcTrampa)
    } else {
        let trampa = document.querySelector (`#trampa`);
        trampa.innerHTML = ``;
    };
    i++;
    return i
};

function music () {
    let spanMusic = document.querySelector (`#music`);
    spanMusic.innerHTML = `<iframe  width="300" height="300" src="https://www.youtube.com/embed/c3aN6Tv4WLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`;
};

//COMBATE------------------------- 
function combateDeElementos () {
    if (ataqueElementoPlayer == ataqueElementoDeLaPc) {
        intervaloCombate (0, 0, 0, 0);
        progresoDeAtaquesEmpate = `Los elementos se igualaron!! 😯😮😲😯😳`;
        crearMensajeResultado(1);
    } else if (ataqueElementoPlayer == `Tierra ☘` && ataqueElementoDeLaPc == `Fuego 🔥`) {//ACA SE MODIFICA LA VIDA DEL PC
        intervaloCombate (debDeTierraMascotaElegidaPC, debDeTierraMascotaElegidaPlayer, 0, 0);
    } else if (ataqueElementoPlayer == `Agua 💧` && ataqueElementoDeLaPc == `Tierra ☘`) {
        intervaloCombate (debDeAguaMascotaElegidaPC, debDeAguaMascotaElegidaPlayer, 0, 0);
    } else if (ataqueElementoPlayer == `Fuego 🔥` && ataqueElementoDeLaPc == `Agua 💧`) {
        intervaloCombate (debDeFuegoMascotaElegidaPC, debDeFuegoMascotaElegidaPlayer, 0, 0);
    } else if (ataqueElementoPlayer == `Fuego 🔥` && ataqueElementoDeLaPc == `Tierra ☘`) {//ACA SE MODIFICA LA VIDA DEL Player
        intervaloCombate (0, 0, debDeTierraMascotaElegidaPlayer,debDeTierraMascotaElegidaPC);
    } else if (ataqueElementoPlayer == `Tierra ☘` && ataqueElementoDeLaPc == `Agua 💧`) {
        intervaloCombate (0, 0, debDeAguaMascotaElegidaPlayer, debDeAguaMascotaElegidaPC);
    } else if (ataqueElementoPlayer == `Agua 💧` && ataqueElementoDeLaPc == `Fuego 🔥`) {
        intervaloCombate (0, 0, debDeFuegoMascotaElegidaPlayer, debDeFuegoMascotaElegidaPC);
    };
};

function intervaloCombate (debilidadElementalPc, fortalezaElementalPlayer, debilidadElementalPlayer, fortalezaElementalPc) {
    progresoDeVidaPc = `vida del dragón de la Pc pierde ${ataqueDelPlayerALaPc - defElegidoPorPc + fortalezaElementalPc + debilidadElementalPc}`;
    vidaPc = vidaPc - ataqueDelPlayerALaPc - defElegidoPorPc + fortalezaElementalPc + debilidadElementalPc;
    progresoDeVidaPlayer = `vida de tú dragón pierde ${ataqueDeLaPcAlPlayer - defElegidoPorPlayer + debilidadElementalPlayer + fortalezaElementalPlayer}`;
    vidaPlayer = vidaPlayer - ataqueDeLaPcAlPlayer - defElegidoPorPlayer + debilidadElementalPlayer + fortalezaElementalPlayer;
    if (vidaPc <= 0) {
        spanVidaPc.innerHTML = 0;
        crearMensajeResultado(2);   
        revisarVidas (0, vidaPlayer);
    } else {
        spanVidaPc.innerHTML = vidaPc;
        crearMensajeResultado(2);
    };
    if (vidaPlayer <= 0) {
        spanVidaPlayer.innerHTML = 0;
        crearMensajeResultado(3);
        revisarVidas (vidaPc, 0);  
    } else {
        spanVidaPlayer.innerHTML = vidaPlayer;
        crearMensajeResultado(3);
    };
};

function revisarVidas (lPc , lPlayer) {
    if (lPc == 0 && lPlayer != 0) {
        crearMensajeFinal (`GANASTE 

        Dejaste al dragón de la PC en 0 de vida. 
        Felicitaciones! Tú dragón es el vencedor. 
        🎉🎉🎈🥳🎉`);
        vidaPc = lPc;
    } else if (lPlayer == 0 && lPc != 0) {
        crearMensajeFinal (`PERDISTE 

        El dragón del Pc dejó en 0 la vida de tú dragón. 
        Vuelve a jugar...  😣😣😣😣😣`);
        vidaPlayer = lPlayer;
    } else if (lPc == 0 && lPlayer == 0) {
        crearMensajeFinal (`Hubo un rotundo empate. 
        
        Ambos perdieron`);
        vidaPc = lPc;
        vidaPlayer = lPlayer;
    };
};

function crearMensajeResultado (historyMessages) {
    if (historyMessages == 1) {
        const commentsParagraph = document.createElement (`p`);
        commentsParagraph.innerHTML = progresoDeAtaquesEmpate;
        comments.appendChild(commentsParagraph);
    } else if (historyMessages == 2) {
        const lifePcParagraph = document.createElement (`p`);
        lifePcParagraph.innerHTML = progresoDeVidaPc;
        ataquePlayer.appendChild(lifePcParagraph);
    } else if (historyMessages == 3) {
        const lifePlayerParagraph = document.createElement (`p`);
        lifePlayerParagraph.innerHTML = progresoDeVidaPlayer;
        ataquePc.appendChild(lifePlayerParagraph);
    };
};

function crearMensajeFinal (combatResult) {
    const resultCombatParagraphparrafo = document.createElement (`p`);
    resultCombatParagraphparrafo.innerText = combatResult;
    divMensajeFinal.appendChild(resultCombatParagraphparrafo); 
    desactivarBtn ();
};

function desactivarBtn () {
    botonFuego.disabled = true;
    botonTierra.disabled = true;
    botonAgua.disabled = true;
    sectionReiniciar.style.visibility = `visible`;
    sectionReiniciar.style.display = `flex`;
};

function relogActualizable () {
    const currentTime = () => {
        const date = new Date ();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds(); 

        hh = hh < 10 ? `0${hh}` : hh;
        mm = mm < 10 ? `0${mm}` : mm;
        ss = ss < 10 ? `0${ss}` : ss;

        let time = `${hh}:${mm}:${ss}`
        const idTime = document.querySelector (`#fecha-de-hoy`);
        idTime.innerText = (`Fecha de hoy: ${date.toDateString()} ${time} hs.`);
    }
    currentTime ();
    setInterval(currentTime, 1000);
};

const spanContenedorDeDragones = document.querySelector (`#conteinerDragons`);
const botonFuego = document.querySelector (`#boton-fuego`);
const botonTierra = document.querySelector(`#boton-tierra`);
const botonAgua = document.querySelector(`#boton-agua`);
const botonParaMascotaPlayer = document.querySelector (`#seleccionar-mascota-player`);
const botonParaMascotaPlayerrandom = document.querySelector (`#seleccionar-mascota-player-random`);
const botonReinicio = document.querySelector (`#boton-reiniciar`);
const hoverBotonSelect = document.querySelector (`#seleccionar-mascota-player`);
const sectionMain2 = document.querySelector (`#section-btn-seleccion-player`);
const spanMenuMascotas = document.querySelector (`#btn-requisito-seleccion`);
const spanVidaPlayer = document.querySelector (`#span-vida-player`);
const spanVidaPc = document.querySelector (`#span-vida-pc`);
const spanMascotaPlayer = document.querySelector (`#nombre-mascota-player`);
const spanMascotarandomPc = document.querySelector (`#nombre-mascota-pc`);
const sectionAtaque = document.querySelector (`#section-ataque`);
const sectionMain = document.querySelector(`#section-main`);
const spanElementosPlayer = document.querySelector (`#span-elementos-player`);
const spanElementosDeLaPc = document.querySelector (`#span-elementos-enemigo`);
const comments = document.getElementById (`mensajes`);
const ataquePlayer = document.getElementById (`ataque-player`);
const ataquePc = document.getElementById (`ataque-pc`);
const divMensajeFinal = document.querySelector (`#mensaje-final`);
const sectionReiniciar = document.querySelector (`#reiniciará`);

let optionsDragons;

let progresoDeAtaquesEmpate;
let progresoDeVidaPlayer;
let progresoDeVidaPc;

let escuchaBotonDeFuego;
let escuchaBotonAgua;
let escuchaBotonTierra;

const dragonsList = [];
const dragonsElection = [];
const mascotaElegidaPorPlayer = [];

const mascotaElegidaPorPc = [];
let eleccionPc;

const mascotaAtaque = [];
const registroDeAtaque = []; 
let ataqueElegidoPorPlayerMascota; 
let ataqueElegidoPorPcMascota;

const registroDeDefensa = [];
let defElegidoPorPlayer;
let defElegidoPorPc;

const registroDeDebFire = [];
let debDeFuegoMascotaElegidaPlayer;
let debDeFuegoMascotaElegidaPC;

const registroDeDebWater = [];
let debDeAguaMascotaElegidaPlayer;
let debDeAguaMascotaElegidaPC;

const registroDeDebEarth = [];
let debDeTierraMascotaElegidaPlayer;
let debDeTierraMascotaElegidaPC;

let ataqueDelPlayerALaPc;
let ataqueDeLaPcAlPlayer;
let ataqueElementoDeLaPc;
let ataqueElementoPlayer;
let progresoDeAtaques;

const registroDeVida = [];
let vidaPlayer;
let vidaPc;

let seleccion = 0;
let i = 0;
let min = 1;
let max = 0; //va a cambiar segun la cantidad de dragones haya iterado

botonFuego.addEventListener (`click`, elementoFuego);
botonTierra.addEventListener (`click`, elementoTierra);
botonAgua.addEventListener (`click`, elementoAgua);
botonParaMascotaPlayer.addEventListener (`click`, seleccionarMascotaPlayer);  
botonParaMascotaPlayerrandom.addEventListener (`click`, seleccionarMascotaPlayerRandom); 
botonReinicio.addEventListener (`click`, botonDeReinicio);
botonParaMascotaPlayer.addEventListener (`click`, seleccionarMascotaPlayer);

relogActualizable ();
window.addEventListener (`load`, init);
//------------------------------------------------------------------------
//.join es metodo para unir arrays!!.
//-----------------------parte de objetos mascotas------------------------

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
    }   
};

dragonsElection.push(new Dragons(`Dragón N°1`, `https://i.imgur.com/GDYqWIE.png`,`Agua`, 1010, 65,16,35,-15,`Indistinto`, `mascota-1`));
dragonsElection.push(new Dragons(`Dragón N°2`, `https://i.imgur.com/2pcscRc.png`,`Fuego`, 1020, 70,15,-15,`Indistinto`,35, `mascota-2`));
dragonsElection.push(new Dragons(`Dragón N°3`, `https://i.imgur.com/vokks6I.png`,`Tierra`, 1030, 75,14,`Indistinto`,35,-15, `mascota-3`));
dragonsElection.push(new Dragons(`Dragón N°4`, `https://i.imgur.com/lzIglf5.png`,`Viento (Agua)`, 1040, 80,13,35-15,-15,35, `mascota-4`));
dragonsElection.push(new Dragons(`Dragón N°5`, `https://i.imgur.com/5PH2mR0.png`,`Lodo (Tierra)`, 1050, 85,12,35,35-15,-15, `mascota-5`));
dragonsElection.push(new Dragons(`Dragón N°6`, `https://i.imgur.com/nSXxdj8.png`,`Lava (Fuego)`, 1060, 90,11,-15,35,35-15, `mascota-6`));

dragonsElection.forEach ((dragon) => {
    let maxAttack = parseInt (dragon.atk * 1.65);
    dragonsList.push (`
    ${dragon.name} 
    Su elemento es de ${dragon.element} 
    Su vida es de ${dragon.health}
    Su ataque es de: ${dragon.atk} - ${maxAttack}
    Su defensa es de: ${dragon.def}
    Su debilidad por Elemento de Fuego: ${dragon.debFire}
    Su debilidad por Elemento de Agua: ${dragon.debWater}
    Su debilidad por Elemento de Tierra: ${dragon.debEarth}`);

    registroDeAtaque.push (dragon.atk);
    registroDeVida.push (dragon.health); 
    registroDeDefensa.push (dragon.def);
    registroDeDebFire.push (dragon.debFire);  
    registroDeDebWater.push (dragon.debWater); 
    registroDeDebEarth.push (dragon.debEarth);  
    }
);